import { useOutletContext } from "react-router-dom";
import HeroSlider from '../HeroSlider.jsx';

import BFImage1 from '../../assets/images/breakfast-image-1.jpg';
import BFImage2 from '../../assets/images/breakfast-image-2.jpg';
import BFImage3 from '../../assets/images/breakfast-image-3.jpg';
import BurgerImage1 from '../../assets/images/burgers-image-1.jpg';
import BurgerImage2 from '../../assets/images/burgers-image-2.jpg';
import BurgerImage3 from '../../assets/images/burgers-image-3.jpg';
import PizzaImage1 from '../../assets/images/pizza-image-1.jpg';
import PizzaImage2 from '../../assets/images/pizza-image-2.jpg';
import PizzaImage3 from '../../assets/images/pizza-image-3.jpg';
import DishesImage1 from '../../assets/images/dishes-image-1.jpg';
import DishesImage2 from '../../assets/images/dishes-image-2.jpg';
import DishesImage3 from '../../assets/images/dishes-image-3.jpg';
import DessertImage1 from '../../assets/images/desserts-image-1.jpg';
import DessertImage2 from '../../assets/images/desserts-image-2.jpg';
import DessertImage3 from '../../assets/images/desserts-image-3.jpg';
import BowlsImage1 from '../../assets/images/bowls-image-1.jpg';
import BowlsImage2 from '../../assets/images/bowls-image-2.jpg';
import BowlsImage3 from '../../assets/images/bowls-image-3.jpg';
import BarImage1 from '../../assets/images/bar-image-1.jpg';
import BarImage2 from '../../assets/images/bar-image-2.jpg';
import BarImage3 from '../../assets/images/bar-image-3.jpg';
import SoupImage1 from '../../assets/images/soup-image-1.jpg';
import SoupImage2 from '../../assets/images/soup-image-2.jpg';
import SoupImage3 from '../../assets/images/soup-image-3.jpg';

const images = [BFImage1, BFImage2, BFImage3, BurgerImage1, BurgerImage2, BurgerImage3, PizzaImage1, PizzaImage2, PizzaImage3, DishesImage1, DishesImage2, DishesImage3, DessertImage1, DessertImage2, DessertImage3, BowlsImage1, BowlsImage2, BowlsImage3, BarImage1, BarImage2, BarImage3, SoupImage1, SoupImage2, SoupImage3];

function HomePage() {

    const { onOpenModal } = useOutletContext();

    return (
        <section className="home-section">
            <div className="container">
                <h1 className="home-section__title">Restaraunt & Bar</h1>
                <button onClick={onOpenModal} className="home-section__button">book now</button>
                <HeroSlider images={images} speed={160}/>
            </div>
        </section>
    );
}

export default HomePage;