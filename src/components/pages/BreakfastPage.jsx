import { useNavigate } from "react-router-dom";
import Icon from '../Icon.jsx';

import BFImage1 from '../../assets/images/breakfast-image-1.jpg';
import BFImage2 from '../../assets/images/breakfast-image-2.jpg';
import BFImage3 from '../../assets/images/breakfast-image-3.jpg';
import BFImage4 from '../../assets/images/breakfast-image-4.jpg';
import BFImage5 from '../../assets/images/breakfast-image-5.jpg';
import BFImage6 from '../../assets/images/breakfast-image-6.jpg';
import BFImage7 from '../../assets/images/breakfast-image-7.jpg';
import BFImage8 from '../../assets/images/breakfast-image-8.jpg';
import BFImage9 from '../../assets/images/breakfast-image-9.jpg';

const breakfastItems = [
    {
        image: BFImage1,
        title: 'American breakfast with beans',
        description: 'egg, beans, pork, tomato',
        price: '15$'
    },
    {
        image: BFImage2,
        title: 'Raspberry pancakes',
        description: 'raspberries, sour cream, honey',
        price: '12$'
    },
    {
        image: BFImage3,
        title: 'Bacon and eggs',
        description: 'bacon, fried eggs, toast, potatoes, tomatoes',
        price: '25$'
    },
    {
        image: BFImage4,
        title: 'Muesli with strawberries',
        description: 'muesli, milk or yogurt, strawberries, honey',
        price: '16$'
    },
    {
        image: BFImage5,
        title: 'Blueberry pancakes',
        description: 'pancakes, blueberries, honey, yogurt',
        price: '18$'
    },
    {
        image: BFImage6,
        title: 'Croissant',
        description: 'jam, condensed milk, chocolate',
        price: '16$'
    },
    {
        image: BFImage7,
        title: 'Toast with ham',
        description: 'ham, egg, tomato, onion, sauce',
        price: '12$'
    },
    {
        image: BFImage8,
        title: 'Peanut butter waffles',
        description: 'waffles, peanut butter, nuts',
        price: '20$'
    },
    {
        image: BFImage9,
        title: 'Banana Pancakes',
        description: 'bananas, honey, yogurt',
        price: '16$'
    },
];

function BreakfastPage() {

    const navigate = useNavigate();

    return (
        <div className="menu-item-section">
            <div className="container">
                <div className="menu-item-section__title-container">
                    <button className="menu-item-section__back-btn" onClick={() => navigate(-1)}><Icon name='icon-arrow-back' className="menu-item-section__back-btn-icon"/></button>
                    <h2 className="menu-item-section__title">Breakfast</h2>
                </div>
                <ul className="menu-item-section__list">
                    {breakfastItems.map((item, index) => (
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

export default BreakfastPage;