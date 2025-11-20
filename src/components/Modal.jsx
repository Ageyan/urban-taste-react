import { useRef } from "react";
import BookingForm from "./BookingForm";
import Icon from "./Icon";

function Modal({ isModalOpen, handleCloseModal }) {
    
    const bookingFormRef = useRef();

    const close = () => {
        bookingFormRef.current?.resetForm(); 
        handleCloseModal();
    };

    return (
        <div className={`modal ${isModalOpen ? 'show' : ''}`}>
            <BookingForm ref={bookingFormRef}>
                <button className="booking-form__close-button" onClick={close}><Icon name='icon-closed' className="booking-form__close-button-icon"/></button>
                <h2 className="booking-form__title">Book the Table</h2>
            </BookingForm>
        </div>
    );
}

export default Modal;

