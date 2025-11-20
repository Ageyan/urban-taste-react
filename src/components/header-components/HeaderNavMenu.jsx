import { NavLink } from "react-router-dom";

function HeaderNavMenu({ variant = 'default', navMenu }) {
    
    const [showMenu, menuRefs, menuStyles, toggleMenuClosed] = navMenu;

    const aboutPage = variant === 'about';

    return (
        <div
            ref={menuRefs.setFloating}
            style={menuStyles}
            className={`header-menu__dropdown ${showMenu ? "show" : ""} ${aboutPage ? 'about-page' : ''}`}
            >
            <ul className="header-menu__list">
                <li><NavLink className="header-menu__link" to="/" onClick={toggleMenuClosed}>Home</NavLink></li>
                <li><NavLink className={`header-menu__link ${aboutPage ? 'about-page' : ''}`} to="/about" onClick={toggleMenuClosed}>About</NavLink></li>
                <li><NavLink className="header-menu__link" to="/menu" onClick={toggleMenuClosed}>Menu</NavLink></li>
                <li><NavLink className="header-menu__link" to="/contacts" onClick={toggleMenuClosed}>Contact</NavLink></li>
            </ul> 
        </div>
    );
}

export default HeaderNavMenu;