import { useNavigate } from "react-router-dom";
import Icon from '../Icon.jsx';

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

const barItems = [
    {
        image: BarImage1,
        title: 'Lime delight',
        description: 'rum, lime, liqueur',
        price: '14$'
    },
    {
        image: BarImage2,
        title: 'Raspberry Jazz',
        description: 'raspberry, liqueur, vodka, cream',
        price: '22$'
    },
    {
        image: BarImage3,
        title: 'Aperol',
        description: 'Aperol, champagne',
        price: '22$'
    },
    {
        image: BarImage4,
        title: 'Lemon honey',
        description: 'lemon, honey, liqueur, rum',
        price: '10$'
    },
    {
        image: BarImage5,
        title: 'Tequila boom',
        description: 'tequila, juice, salt, liqueur',
        price: '24$'
    },
    {
        image: BarImage6,
        title: 'Orange cocktail',
        description: 'champagne, orange, liqueur, rum',
        price: '25$'
    },
    {
        image: BarImage7,
        title: 'Grapefruit cocktail',
        description: 'rum, grapefruit, liqueur',
        price: '13$'
    },
    {
        image: BarImage8,
        title: 'Cucumber Mojito',
        description: 'rum, sprite, cucumber',
        price: '25$'
    },
    {
        image: BarImage9,
        title: 'Hot rum',
        description: 'rum, juice, chili',
        price: '17$'
    },
    {
        image: BarImage10,
        title: 'Latte',
        description: 'coffee, milk, syrup',
        price: '15$'
    },
    {
        image: BarImage11,
        title: 'Tea',
        description: 'tea, honey, cookies',
        price: '24$'
    },
    {
        image: BarImage12,
        title: 'Cappuccino',
        description: 'coffee, milk, syrup',
        price: '14$'
    },
];

function BarPage() {
    const navigate = useNavigate();

    return (
        <div className="menu-item-section">
                    <div className="container">
                        <div className="menu-item-section__title-container">
                    <button className="menu-item-section__back-btn" onClick={() => navigate(-1)}><Icon name='icon-arrow-back' className="menu-item-section__back-btn-icon"/></button>
                            <h2 className="menu-item-section__title">Bar</h2>
                        </div>
                        <ul className="menu-item-section__list">
                            {barItems.map((item, index) => (
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

export default BarPage;