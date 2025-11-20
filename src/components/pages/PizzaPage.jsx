import { useNavigate } from "react-router-dom";
import Icon from '../Icon.jsx';

import PizzaImage1 from '../../assets/images/pizza-image-1.jpg';
import PizzaImage2 from '../../assets/images/pizza-image-2.jpg';
import PizzaImage3 from '../../assets/images/pizza-image-3.jpg';
import PizzaImage4 from '../../assets/images/pizza-image-4.jpg';
import PizzaImage5 from '../../assets/images/pizza-image-5.jpg';
import PizzaImage6 from '../../assets/images/pizza-image-6.jpg';

const pizzaItems = [
    {
        image: PizzaImage1,
        title: 'Pizza with Gorgonzola',
        description: 'tomato sauce, basil, gorgonzola, mozzarella',
        price: '24$'
    },
    {
        image: PizzaImage2,
        title: 'Teriyaki Pizza',
        description: 'teriyaki sauce, chicken, tomatoes, mushrooms',
        price: '25$'
    },
    {
        image: PizzaImage3,
        title: 'Hawaiian Pizza',
        description: 'chicken, pineapples, tomato, mozzarella',
        price: '20$'
    },
    {
        image: PizzaImage4,
        title: 'Margherita Pizza',
        description: 'tomato sauce, mozzarella, tomatoes',
        price: '19$'
    },
    {
        image: PizzaImage5,
        title: 'Pepperoni Pizza',
        description: 'pepperoni, mozzarella, tomatoes',
        price: '20$'
    },
    {
        image: PizzaImage6,
        title: 'Double Pepperoni Pizza',
        description: 'double pepperoni, mozzarella, tomatoes',
        price: '30$'
    },
];

function PizzaPage() {
    const navigate = useNavigate();

    return (
        <div className="menu-item-section">
                    <div className="container">
                        <div className="menu-item-section__title-container">
                            <button className="menu-item-section__back-btn" onClick={() => navigate(-1)}><Icon name='icon-arrow-back' className="menu-item-section__back-btn-icon"/></button>
                            <h2 className="menu-item-section__title">Pizza</h2>
                        </div>
                        <ul className="menu-item-section__list">
                            {pizzaItems.map((item, index) => (
                                <li key={index} className="menu-item-section__item">
                                    <article className="menu-item-section__item-container">
                                        <img src={item.image} alt={item.title} />
                                        <h3 className="menu-item-section__item-title">{item.title}</h3>
                                        <p className="menu-item-section__item-description">{item.description}</p>
                                        <p className="menu-item-section__item-price">{item.price}</p>
                                    </article>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
    );
}

export default PizzaPage;