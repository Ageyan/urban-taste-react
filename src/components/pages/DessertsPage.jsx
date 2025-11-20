import { useNavigate } from "react-router-dom";
import Icon from '../Icon.jsx';

import DessertImage1 from '../../assets/images/desserts-image-1.jpg';
import DessertImage2 from '../../assets/images/desserts-image-2.jpg';
import DessertImage3 from '../../assets/images/desserts-image-3.jpg';
import DessertImage4 from '../../assets/images/desserts-image-4.jpg';
import DessertImage5 from '../../assets/images/desserts-image-5.jpg';
import DessertImage6 from '../../assets/images/desserts-image-6.jpg';
import DessertImage7 from '../../assets/images/desserts-image-7.jpg';
import DessertImage8 from '../../assets/images/desserts-image-8.jpg';
import DessertImage9 from '../../assets/images/desserts-image-9.jpg';

const dessertsItems = [
    {
        image: DessertImage1,
        title: 'Lemon cake',
        price: '16$'
    },
    {
        image: DessertImage2,
        title: 'Raspberry cake',
        price: '20$'
    },
    {
        image: DessertImage3,
        title: 'Honey cake',
        price: '22$'
    },
    {
        image: DessertImage4,
        title: 'Panna cotta',
        price: '12$'
    },
    {
        image: DessertImage5,
        title: 'Cupcake with cream',
        price: '17$'
    },
    {
        image: DessertImage6,
        title: 'Raspberry sponge cake',
        price: '24$'
    },
    {
        image: DessertImage7,
        title: 'Cheesecake',
        price: '15$'
    },
    {
        image: DessertImage8,
        title: 'Strawberry Shortcake',
        price: '20$'
    },
    {
        image: DessertImage9,
        title: 'Chocolate brownie',
        price: '18$'
    },
];

function DessertsPage() {
    const navigate = useNavigate();

    return (
        <div className="menu-item-section">
                    <div className="container">
                        <div className="menu-item-section__title-container">
                            <button className="menu-item-section__back-btn" onClick={() => navigate(-1)}><Icon name='icon-arrow-back' className="menu-item-section__back-btn-icon"/></button>
                            <h2 className="menu-item-section__title">Desserts</h2>
                        </div>
                        <ul className="menu-item-section__list">
                            {dessertsItems.map((item, index) => (
                                <li key={index} className="menu-item-section__item">
                                    <article className="menu-item-section__item-container">
                                        <img src={item.image} alt={item.title} />
                                        <h3 className="menu-item-section__item-title">{item.title}</h3>
                                        <p className="menu-item-section__item-price">{item.price}</p>
                                    </article>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
    );
}

export default DessertsPage;