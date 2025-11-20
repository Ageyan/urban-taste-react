import { useNavigate } from "react-router-dom";
import Icon from '../Icon.jsx';

import SoupImage1 from '../../assets/images/soup-image-1.jpg';
import SoupImage2 from '../../assets/images/soup-image-2.jpg';
import SoupImage3 from '../../assets/images/soup-image-3.jpg';
import SoupImage4 from '../../assets/images/soup-image-4.jpg';
import SoupImage5 from '../../assets/images/soup-image-5.jpg';
import SoupImage6 from '../../assets/images/soup-image-6.jpg';

const soupItems = [
    {
        image: SoupImage1,
        title: 'Tomato cream soup',
        description: 'tomatoes, parmesan, potatoes, pork',
        price: '19$'
    },
    {
        image: SoupImage2,
        title: 'Creamy Shrimp Soup',
        description: 'pumpkin, shrimp, potatoes, parmesan',
        price: '30$'
    },
    {
        image: SoupImage3,
        title: 'Seafood soup',
        description: 'shrimp, mussels, squid',
        price: '35$'
    },
    {
        image: SoupImage4,
        title: 'Beef udon',
        description: 'noodles, beef, corn, seaweed, egg',
        price: '27$'
    },
    {
        image: SoupImage5,
        title: 'Udon with shrimp',
        description: 'noodles, shrimp, onion, egg, asparagus',
        price: '26$'
    },
    {
        image: SoupImage6,
        title: 'Carrot cream soup',
        description: 'milk, carrots, potatoes, chicken, parmesan',
        price: '23$'
    },
];

function SoupsPage() {

    const navigate = useNavigate();

    return (
        <div className="menu-item-section">
                    <div className="container">
                        <div className="menu-item-section__title-container">
                            <button className="menu-item-section__back-btn" onClick={() => navigate(-1)}><Icon name='icon-arrow-back' className="menu-item-section__back-btn-icon"/></button>
                            <h2 className="menu-item-section__title">Soups</h2>
                        </div>
                        <ul className="menu-item-section__list">
                            {soupItems.map((item, index) => (
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

export default SoupsPage;