import { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { MdArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";
import 'swiper/css';
import 'swiper/css/navigation'

import BFImage1 from '../../assets/images/breakfast-image-1.jpg';
import BFImage2 from '../../assets/images/breakfast-image-2.jpg';
import BFImage3 from '../../assets/images/breakfast-image-3.jpg';
import BFImage4 from '../../assets/images/breakfast-image-4.jpg';
import BFImage5 from '../../assets/images/breakfast-image-5.jpg';
import BFImage6 from '../../assets/images/breakfast-image-6.jpg';
import BFImage7 from '../../assets/images/breakfast-image-7.jpg';
import BFImage8 from '../../assets/images/breakfast-image-8.jpg';
import BFImage9 from '../../assets/images/breakfast-image-9.jpg';
import SoupImage1 from '../../assets/images/soup-image-1.jpg';
import SoupImage2 from '../../assets/images/soup-image-2.jpg';
import SoupImage3 from '../../assets/images/soup-image-3.jpg';
import SoupImage4 from '../../assets/images/soup-image-4.jpg';
import SoupImage5 from '../../assets/images/soup-image-5.jpg';
import SoupImage6 from '../../assets/images/soup-image-6.jpg';
import BurgerImage1 from '../../assets/images/burgers-image-1.jpg';
import BurgerImage2 from '../../assets/images/burgers-image-2.jpg';
import BurgerImage3 from '../../assets/images/burgers-image-3.jpg';
import BurgerImage4 from '../../assets/images/burgers-image-4.jpg';
import BurgerImage5 from '../../assets/images/burgers-image-5.jpg';
import BurgerImage6 from '../../assets/images/burgers-image-6.jpg'; 
import PizzaImage1 from '../../assets/images/pizza-image-1.jpg';
import PizzaImage2 from '../../assets/images/pizza-image-2.jpg';
import PizzaImage3 from '../../assets/images/pizza-image-3.jpg';
import PizzaImage4 from '../../assets/images/pizza-image-4.jpg';
import PizzaImage5 from '../../assets/images/pizza-image-5.jpg';
import PizzaImage6 from '../../assets/images/pizza-image-6.jpg';
import BowlsImage1 from '../../assets/images/bowls-image-1.jpg';
import BowlsImage2 from '../../assets/images/bowls-image-2.jpg';
import BowlsImage3 from '../../assets/images/bowls-image-3.jpg';
import BowlsImage4 from '../../assets/images/bowls-image-4.jpg';
import BowlsImage5 from '../../assets/images/bowls-image-5.jpg';
import BowlsImage6 from '../../assets/images/bowls-image-6.jpg';
import DishesImage1 from '../../assets/images/dishes-image-1.jpg';
import DishesImage2 from '../../assets/images/dishes-image-2.jpg';
import DishesImage3 from '../../assets/images/dishes-image-3.jpg';
import DishesImage4 from '../../assets/images/dishes-image-4.jpg';
import DishesImage5 from '../../assets/images/dishes-image-5.jpg';
import DishesImage6 from '../../assets/images/dishes-image-6.jpg';
import DishesImage7 from '../../assets/images/dishes-image-7.jpg';
import DishesImage8 from '../../assets/images/dishes-image-8.jpg';
import DishesImage9 from '../../assets/images/dishes-image-9.jpg';
import DessertImage1 from '../../assets/images/desserts-image-1.jpg';
import DessertImage2 from '../../assets/images/desserts-image-2.jpg';
import DessertImage3 from '../../assets/images/desserts-image-3.jpg';
import DessertImage4 from '../../assets/images/desserts-image-4.jpg';
import DessertImage5 from '../../assets/images/desserts-image-5.jpg';
import DessertImage6 from '../../assets/images/desserts-image-6.jpg';
import DessertImage7 from '../../assets/images/desserts-image-7.jpg';
import DessertImage8 from '../../assets/images/desserts-image-8.jpg';
import DessertImage9 from '../../assets/images/desserts-image-9.jpg';
import BarImage1 from '../../assets/images/bar-image-1.jpg';
import BarImage2 from '../../assets/images/bar-image-2.jpg';
import BarImage3 from '../../assets/images/bar-image-3.jpg';
import BarImage4 from '../../assets/images/bar-image-4.jpg';
import BarImage5 from '../../assets/images/bar-image-5.jpg';
import BarImage6 from '../../assets/images/bar-image-6.jpg'; 
import BarImage7 from '../../assets/images/bar-image-7.jpg';
import BarImage8 from '../../assets/images/bar-image-8.jpg';
import BarImage9 from '../../assets/images/bar-image-9.jpg'; 
import BarImage10 from '../../assets/images/bar-image-10.jpg';
import BarImage11 from '../../assets/images/bar-image-11.jpg';
import BarImage12 from '../../assets/images/bar-image-12.jpg'; 

const breakFastImages = [BFImage1, BFImage2, BFImage3, BFImage4, BFImage5, BFImage6, BFImage7, BFImage8, BFImage9];
const soupImages = [SoupImage1, SoupImage2, SoupImage3, SoupImage4, SoupImage5, SoupImage6];
const burgerImages = [BurgerImage1, BurgerImage2, BurgerImage3, BurgerImage4, BurgerImage5, BurgerImage6];
const pizzaImages = [PizzaImage1, PizzaImage2, PizzaImage3, PizzaImage4, PizzaImage5, PizzaImage6];
const bowlsImages = [BowlsImage1, BowlsImage2, BowlsImage3, BowlsImage4, BowlsImage5, BowlsImage6];
const dishesImages = [DishesImage1, DishesImage2, DishesImage3, DishesImage4, DishesImage5, DishesImage6, DishesImage7, DishesImage8, DishesImage9];
const dessertImages = [DessertImage1, DessertImage2, DessertImage3, DessertImage4, DessertImage5, DessertImage6, DessertImage7, DessertImage8, DessertImage9];
const barImages = [BarImage1, BarImage2, BarImage3, BarImage4, BarImage5, BarImage6, BarImage7, BarImage8, BarImage9, BarImage10, BarImage11, BarImage12];

function MenuPage() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const handleUp = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    return (
        <section className="menu-section">
            <div className="container">
                <h2 className="menu-section__title">Menu</h2>
                <div className="menu-section__all-container">
                    <div className="menu-section__container">
                        <div className="slider">
                            <button ref={prevRef} className="custom-nav custom-prev" aria-label="prev"><MdArrowBackIos /></button>
                            <button ref={nextRef} className="custom-nav custom-next" aria-label="next"><MdArrowBackIos/></button>
                            <Swiper
                                modules={[Navigation]}
                                spaceBetween={5}
                                slidesPerView={3}
                                loop
                                onInit={(swiper) => {
                                    swiper.params.navigation.prevEl = prevRef.current;
                                    swiper.params.navigation.nextEl = nextRef.current;
                                    swiper.navigation.init();
                                    swiper.navigation.update();
                                }}
                                className="slider__items"
                            >
                                {breakFastImages.map(
                                    (img, index) => (
                                        <SwiperSlide key={index}>
                                            <Link onClick={handleUp} to='/breakfast'><img src={img} alt={`Slide ${index + 1}`} /></Link>
                                        </SwiperSlide>
                                    )
                                )}
                            </Swiper>
                        </div>
                        <Link className="menu-section__mini-title-nav" onClick={handleUp} to='/breakfast'><h3 className="limited">Break<span>Fast</span></h3></Link>
                    </div>
                    <div className="menu-section__container">
                        <Link className="menu-section__mini-title-nav" onClick={handleUp} to='/soups'><h3>Soups</h3></Link>
                        <div className="slider">
                            <button ref={prevRef} className="custom-nav custom-prev" aria-label="prev"><MdArrowBackIos /></button>
                            <button ref={nextRef} className="custom-nav custom-next" aria-label="next"><MdArrowBackIos/></button>
                            <Swiper
                                modules={[Navigation]}
                                spaceBetween={5}
                                slidesPerView={3}
                                loop
                                onInit={(swiper) => {
                                    swiper.params.navigation.prevEl = prevRef.current;
                                    swiper.params.navigation.nextEl = nextRef.current;
                                    swiper.navigation.init();
                                    swiper.navigation.update();
                                }}
                                className="slider__items"
                            >
                                {soupImages.map(
                                    (img, index) => (
                                        <SwiperSlide key={index}>
                                            <Link onClick={handleUp} to='/soups'><img src={img} alt={`Slide ${index + 1}`} /></Link>
                                        </SwiperSlide>
                                    )
                                )}
                            </Swiper>
                        </div>
                    </div>
                    <div className="menu-section__container">
                        <div className="slider">
                            <button ref={prevRef} className="custom-nav custom-prev" aria-label="prev"><MdArrowBackIos /></button>
                            <button ref={nextRef} className="custom-nav custom-next" aria-label="next"><MdArrowBackIos/></button>
                            <Swiper
                                modules={[Navigation]}
                                spaceBetween={5}
                                slidesPerView={3}
                                loop
                                onInit={(swiper) => {
                                    swiper.params.navigation.prevEl = prevRef.current;
                                    swiper.params.navigation.nextEl = nextRef.current;
                                    swiper.navigation.init();
                                    swiper.navigation.update();
                                }}
                                className="slider__items"
                            >
                                {burgerImages.map(
                                    (img, index) => (
                                        <SwiperSlide key={index}>
                                            <Link onClick={handleUp} to='/burgers'><img src={img} alt={`Slide ${index + 1}`} /></Link>
                                        </SwiperSlide>
                                    )
                                )}
                            </Swiper>
                        </div>
                        <Link className="menu-section__mini-title-nav" onClick={handleUp} to='/burgers'><h3>Burgers</h3></Link>
                    </div>
                    <div className="menu-section__container">
                        <Link className="menu-section__mini-title-nav" onClick={handleUp} to='/pizza'><h3>Pizza</h3></Link>
                        <div className="slider">
                            <button ref={prevRef} className="custom-nav custom-prev" aria-label="prev"><MdArrowBackIos /></button>
                            <button ref={nextRef} className="custom-nav custom-next" aria-label="next"><MdArrowBackIos/></button>
                            <Swiper
                                modules={[Navigation]}
                                spaceBetween={5}
                                slidesPerView={3}
                                loop
                                onInit={(swiper) => {
                                    swiper.params.navigation.prevEl = prevRef.current;
                                    swiper.params.navigation.nextEl = nextRef.current;
                                    swiper.navigation.init();
                                    swiper.navigation.update();
                                }}
                                className="slider__items"
                            >
                                {pizzaImages.map(
                                    (img, index) => (
                                        <SwiperSlide key={index}>
                                            <Link onClick={handleUp} to='/pizza'><img src={img} alt={`Slide ${index + 1}`} /></Link>
                                        </SwiperSlide>
                                    )
                                )}
                            </Swiper>
                        </div>
                    </div>
                    <div className="menu-section__container">
                        <div className="slider">
                            <button ref={prevRef} className="custom-nav custom-prev" aria-label="prev"><MdArrowBackIos /></button>
                            <button ref={nextRef} className="custom-nav custom-next" aria-label="next"><MdArrowBackIos/></button>
                            <Swiper
                                modules={[Navigation]}
                                spaceBetween={5}
                                slidesPerView={3}
                                loop
                                onInit={(swiper) => {
                                    swiper.params.navigation.prevEl = prevRef.current;
                                    swiper.params.navigation.nextEl = nextRef.current;
                                    swiper.navigation.init();
                                    swiper.navigation.update();
                                }}
                                className="slider__items"
                            >
                                {bowlsImages.map(
                                    (img, index) => (
                                        <SwiperSlide key={index}>
                                            <Link onClick={handleUp} to='/bowls'><img src={img} alt={`Slide ${index + 1}`} /></Link>
                                        </SwiperSlide>
                                    )
                                )}
                            </Swiper>
                        </div>
                        <Link className="menu-section__mini-title-nav" onClick={handleUp} to='/bowls'><h3>Bowls</h3></Link>
                    </div>
                    <div className="menu-section__container">
                        <Link className="menu-section__mini-title-nav" onClick={handleUp} to='/dishes'><h3>Dishes</h3></Link>
                        <div className="slider">
                            <button ref={prevRef} className="custom-nav custom-prev" aria-label="prev"><MdArrowBackIos /></button>
                            <button ref={nextRef} className="custom-nav custom-next" aria-label="next"><MdArrowBackIos/></button>
                            <Swiper
                                modules={[Navigation]}
                                spaceBetween={5}
                                slidesPerView={3}
                                loop
                                onInit={(swiper) => {
                                    swiper.params.navigation.prevEl = prevRef.current;
                                    swiper.params.navigation.nextEl = nextRef.current;
                                    swiper.navigation.init();
                                    swiper.navigation.update();
                                }}
                                className="slider__items"
                            >
                                {dishesImages.map(
                                    (img, index) => (
                                        <SwiperSlide key={index}>
                                            <Link onClick={handleUp} to='/dishes'><img src={img} alt={`Slide ${index + 1}`} /></Link>
                                        </SwiperSlide>
                                    )
                                )}
                            </Swiper>
                        </div>
                    </div>
                    <div className="menu-section__container">
                        <div className="slider">
                            <button ref={prevRef} className="custom-nav custom-prev" aria-label="prev"><MdArrowBackIos /></button>
                            <button ref={nextRef} className="custom-nav custom-next" aria-label="next"><MdArrowBackIos/></button>
                            <Swiper
                                modules={[Navigation]}
                                spaceBetween={5}
                                slidesPerView={3}
                                loop
                                onInit={(swiper) => {
                                    swiper.params.navigation.prevEl = prevRef.current;
                                    swiper.params.navigation.nextEl = nextRef.current;
                                    swiper.navigation.init();
                                    swiper.navigation.update();
                                }}
                                className="slider__items"
                            >
                                {dessertImages.map(
                                    (img, index) => (
                                        <SwiperSlide key={index}>
                                            <Link onClick={handleUp} to='/desserts'><img src={img} alt={`Slide ${index + 1}`} /></Link>
                                        </SwiperSlide>
                                    )
                                )}
                            </Swiper>
                        </div>
                        <Link className="menu-section__mini-title-nav" onClick={handleUp} to='/desserts'><h3 className="limited">Dess<span>erts</span></h3></Link>
                    </div>
                    <div className="menu-section__container">
                        <Link className="menu-section__mini-title-nav" onClick={handleUp} to='/bar'><h3>Bar</h3></Link>
                        <div className="slider">
                            <button ref={prevRef} className="custom-nav custom-prev" aria-label="prev"><MdArrowBackIos /></button>
                            <button ref={nextRef} className="custom-nav custom-next" aria-label="next"><MdArrowBackIos/></button>
                            <Swiper
                                modules={[Navigation]}
                                spaceBetween={5}
                                slidesPerView={3}
                                loop
                                onInit={(swiper) => {
                                    swiper.params.navigation.prevEl = prevRef.current;
                                    swiper.params.navigation.nextEl = nextRef.current;
                                    swiper.navigation.init();
                                    swiper.navigation.update();
                                }}
                                className="slider__items"
                            >
                                {barImages.map(
                                    (img, index) => (
                                        <SwiperSlide key={index}>
                                            <Link onClick={handleUp} to='/bar'><img src={img} alt={`Slide ${index + 1}`} /></Link>
                                        </SwiperSlide>
                                    )
                                )}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MenuPage;