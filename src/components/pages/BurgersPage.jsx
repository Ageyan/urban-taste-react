import { useNavigate } from "react-router-dom";
import Icon from '../Icon.jsx';

import BurgerImage1 from '../../assets/images/burgers-image-1.jpg';
import BurgerImage2 from '../../assets/images/burgers-image-2.jpg';
import BurgerImage3 from '../../assets/images/burgers-image-3.jpg';
import BurgerImage4 from '../../assets/images/burgers-image-4.jpg';
import BurgerImage5 from '../../assets/images/burgers-image-5.jpg';
import BurgerImage6 from '../../assets/images/burgers-image-6.jpg';

const burgersItems = [
    {
        image: BurgerImage1,
        title: 'Cheese burger',
        description: 'mozzarella, cheddar, beef',
        price: '20$'
    },
    {
        image: BurgerImage2,
        title: 'Beef burger with bacon',
        description: 'beef, bacon, cheddar, french fries',
        price: '30$'
    },
    {
        image: BurgerImage3,
        title: 'Double Cheeseburger',
        description: 'double beef patty, cheddar, sauce',
        price: '25$'
    },
    {
        image: BurgerImage4,
        title: 'Fresh burger',
        description: 'chicken, bacon, sauce, onion, mozzarella',
        price: '20$'
    },
    {
        image: BurgerImage5,
        title: 'Beef burger',
        description: 'beef burger, pickles, onions, sauce, cheddar',
        price: '22$'
    },
    {
        image: BurgerImage6,
        title: 'Pork burger',
        description: 'pork, sauce, mozzarella, tomato, potatoes',
        price: '28$'
    },
];

function BurgersPage() {
    const navigate = useNavigate();

    return (
        <div className="menu-item-section">
                    <div className="container">
                        <div className="menu-item-section__title-container">
                            <button className="menu-item-section__back-btn" onClick={() => navigate(-1)}><Icon name='icon-arrow-back' className="menu-item-section__back-btn-icon"/></button>
                            <h2 className="menu-item-section__title">Burgers</h2>
                        </div>
                        <ul className="menu-item-section__list">
                            {burgersItems.map((item, index) => (
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

export default BurgersPage;