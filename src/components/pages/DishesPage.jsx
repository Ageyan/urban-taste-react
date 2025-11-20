import { useNavigate } from "react-router-dom";
import Icon from '../Icon.jsx';

import DishesImage1 from '../../assets/images/dishes-image-1.jpg';
import DishesImage2 from '../../assets/images/dishes-image-2.jpg';
import DishesImage3 from '../../assets/images/dishes-image-3.jpg';
import DishesImage4 from '../../assets/images/dishes-image-4.jpg';
import DishesImage5 from '../../assets/images/dishes-image-5.jpg';
import DishesImage6 from '../../assets/images/dishes-image-6.jpg';
import DishesImage7 from '../../assets/images/dishes-image-7.jpg';
import DishesImage8 from '../../assets/images/dishes-image-8.jpg';
import DishesImage9 from '../../assets/images/dishes-image-9.jpg';

const dishesItems = [
    {
        image: DishesImage1,
        title: 'Sashimi',
        description: 'tuna, perch, salmon, shrimp',
        price: '150$'
    },
    {
        image: DishesImage2,
        title: 'Grilled salmon',
        description: 'salmon, salad',
        price: '40$'
    },
    {
        image: DishesImage3,
        title: 'Beef medallions',
        description: 'beef, asparagus, cranberry sauce',
        price: '50$'
    },
    {
        image: DishesImage4,
        title: 'Salmon in creamy sauce',
        description: 'salmon, creamy sauce, vegetables',
        price: '44$'
    },
    {
        image: DishesImage5,
        title: 'Shrimps',
        description: 'shrimp, lemon, sauce',
        price: '17$'
    },
    {
        image: DishesImage6,
        title: 'Trout in cheese sauce',
        description: 'trout, rice, cheese sauce',
        price: '54$'
    },
    {
        image: DishesImage7,
        title: 'Beef steak',
        description: 'beef steak, sauce, salad',
        price: '48$'
    },
    {
        image: DishesImage8,
        title: 'Pork with potatoes',
        description: 'pork, potatoes, sauce',
        price: '53$'
    },
    {
        image: DishesImage9,
        title: 'Assorted meats',
        description: 'wings, pork, beef, vegetables, chicken, potatoes',
        price: '65$'
    },
];

function DishesPage() {
    const navigate = useNavigate();
    return (
        <div className="menu-item-section">
                    <div className="container">
                        <div className="menu-item-section__title-container">
                            <button className="menu-item-section__back-btn" onClick={() => navigate(-1)}><Icon name='icon-arrow-back' className="menu-item-section__back-btn-icon"/></button>
                            <h2 className="menu-item-section__title">Dishes</h2>
                        </div>
                        <ul className="menu-item-section__list">
                            {dishesItems.map((item, index) => (
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

export default DishesPage;