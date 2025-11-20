import { forwardRef, useImperativeHandle } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useFetch } from "./useFetch";
import * as yup from "yup";

const today = new Date();
today.setHours(0, 0, 0, 0);

const schema = yup.object().shape({
    name: yup
        .string()
        .required("Please enter your name")
        .min(2, "Name is too short")
        .max(50, "Name is too long"),

    phone: yup
        .string()
        .required("Please enter your phone number")
        .matches(/^\+?\d{7,15}$/, "Invalid phone number"),

    date: yup
        .date()
        .typeError("Please select a valid date")
        .min(today, "You can’t book for a past date")
        .required("Please select a date"),

    time: yup
        .string()
        .required("Please select a time")
        .test(
            "is-between-9-and-22",
            "We work from 09:00 to 22:00",
            (value) => {
                if (!value) return false;
                const [h, m] = value.split(":").map(Number);
                const total = h * 60 + m;
                return total >= 540 && total <= 1320; // 09:00–22:00
            }
        ),

    guests: yup
        .number()
        .typeError("Please enter a number")
        .required("Please specify number of guests")
        .min(1, "At least 1 guest")
        .max(20, "Max 20 guests"),

    comment: yup.string().max(200, "Comment too long"),
});

const BookingForm = forwardRef(({ variant = "default", children }, ref) => {

    const { send, isLoading, success, error } = useFetch("users");

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    const onSubmit = async (data) => {
        await send(data);
        reset();        
    };

    const isContactPage = variant === "contact";

    useImperativeHandle(ref, () => ({
        resetForm() {
            reset();
        },
    }));

    return (
        <div className={`booking-form ${isContactPage ? "bottom" : ""}`}>
            {children}
            <form
                className={`booking-form__container ${
                    isContactPage ? "gap" : ""
                }`}
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="booking-form__field-wrapper">
                    <input
                        type="text"
                        placeholder="Name"
                        {...register("name")}
                        className={`booking-form__input ${
                            errors.name ? "error" : ""
                        }`}
                    />
                    {errors.name && (
                        <span className="booking-form__error-bubble">
                            {errors.name.message}
                        </span>
                    )}
                </div>
                <div className="booking-form__field-wrapper">
                    <input
                        type="tel"
                        placeholder="Phone"
                        {...register("phone")}
                        className={`booking-form__input ${
                            errors.phone ? "error" : ""
                        }`}
                    />
                    {errors.phone && (
                        <span className="booking-form__error-bubble">
                            {errors.phone.message}
                        </span>
                    )}
                </div>
                <div className="booking-form__field-wrapper">
                    <input
                        type="date"
                        {...register("date")}
                        min={new Date().toISOString().split("T")[0]}
                        className={`booking-form__input ${
                            errors.date ? "error" : ""
                        }`}
                    />
                    {errors.date && (
                        <span className="booking-form__error-bubble">
                            {errors.date.message}
                        </span>
                    )}
                </div>
                <div className="booking-form__field-wrapper">
                    <input
                        type="time"
                        min="09:00"
                        max="22:00"
                        {...register("time")}
                        className={`booking-form__input ${
                            errors.time ? "error" : ""
                        }`}
                    />
                    {errors.time && (
                        <span className="booking-form__error-bubble">
                            {errors.time.message}
                        </span>
                    )}
                </div>
                <div className="booking-form__field-wrapper">
                    <input
                        type="number"
                        placeholder="Guests"
                        {...register("guests")}
                        className={`booking-form__input ${
                            errors.guests ? "error" : ""
                        }`}
                    />
                    {errors.guests && (
                        <span className="booking-form__error-bubble">
                            {errors.guests.message}
                        </span>
                    )}
                </div>
                <div className="booking-form__field-wrapper">
                    <input
                        type="text"
                        placeholder="Comment"
                        {...register("comment")}
                        className={`booking-form__input ${
                            errors.comment ? "error" : ""
                        }`}
                    />
                    {errors.comment && (
                        <span className="booking-form__error-bubble">
                            {errors.comment.message}
                        </span>
                    )}
                </div>
                <button
                    className="booking-form__submit-button"
                    type="submit"
                    disabled={isLoading}
                >
                    {isLoading ? "Sending..." : "Book"}
                </button>

                {success && <div className="done-message visible">Done</div>}
                {error && <div className="server-error">{error}</div>}
            </form>
        </div>
    );
});

export default BookingForm;
