import { useNavigate } from "react-router-dom";
import Icon from '../Icon.jsx';

import BowlsImage1 from '../../assets/images/bowls-image-1.jpg';
import BowlsImage2 from '../../assets/images/bowls-image-2.jpg';
import BowlsImage3 from '../../assets/images/bowls-image-3.jpg';

const bowlsItems = [
    {
        image: BowlsImage1,
        title: 'Shrimp Bowl',
        description: 'shrimp, rice noodles, champignons',
        price: '20$'
    },
    {
        image: BowlsImage2,
        title: 'Chicken Bowl',
        description: 'chicken, rice, tomatoes, teriyaki sauce',
        price: '19$'
    },
    {
        image: BowlsImage3,
        title: 'Tuna Bowl',
        description: 'tuna, rice, teriyaki sauce, carrots, avocado',
        price: '28$'
    },
];

function BowlsPage() {
    const navigate = useNavigate();

    return (
        <div className="menu-item-section">
                    <div className="container">
                        <div className="menu-item-section__title-container">
                            <button className="menu-item-section__back-btn" onClick={() => navigate(-1)}><Icon name='icon-arrow-back' className="menu-item-section__back-btn-icon"/></button>
                            <h2 className="menu-item-section__title">Bowls</h2>
                        </div>
                        <ul className="menu-item-section__list">
                            {bowlsItems.map((item, index) => (
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

export default BowlsPage;