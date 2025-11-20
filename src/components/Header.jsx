import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useFloating, offset, flip, shift } from "@floating-ui/react";
import { IoIosArrowDown } from "react-icons/io";
import HeaderNavMenu from "./header-components/HeaderNavMenu";
import HeaderCallMenu from "./header-components/HeaderCallMenu";
import Icon from "./Icon.jsx";

function Header({ onOpenModal }) {
    const [showMenu, setShowMenu] = useState(false);
    const [showCallMenu, setShowCallMenu] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setShowMenu(!showMenu);
    const toggleCallMenu = () => setShowCallMenu(!showCallMenu);
    const toggleMenuClosed = () => { setShowMenu(false); };
    const toggleCallMenuClosed = () => { setShowCallMenu(false); };

    const [placement, setPlacement] = useState(
        window.innerWidth < 768 ? "bottom-start" : "bottom-end"
    );

    useEffect(() => {
        const handleResize = () => {
            setPlacement(window.innerWidth < 768 ? "bottom-start" : "bottom-end");
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    const { refs: menuRefs, floatingStyles: menuStyles } = useFloating({
        placement: "bottom-start",
        middleware: [offset(10), flip(), shift()],
    });

    const {refs: callRefs, floatingStyles: callStyles } = useFloating({
        placement: placement,
        middleware: [offset(10), flip(), shift()],
    });

    const headerColor = {
        '/': '',
        '/about': 'black',
        '/contacts': 'black hover-white',
        '/menu': '',
        '/breakfast': 'black hover-white',
        '/burgers': 'black hover-white',
        '/bar': 'black hover-white',
        '/bowls': 'black hover-white',
        '/desserts': 'black hover-white',
        '/dishes': 'black hover-white',
        '/pizza': 'black hover-white',
        '/soups': 'black hover-white',
    }

    // const secondHeaderColor = {
    //     '/contacts': 'hover-white',
    //     '/breakfast': 'hover-white',
    //     '/burgers': 'hover-white',
    //     '/bar': 'hover-white',
    //     '/bowls': 'hover-white',
    //     '/desserts': 'hover-white',
    //     '/dishes': 'hover-white',
    //     '/pizza': 'hover-white',
    //     '/soups': 'hover-white',
    // }

    const headerClass = headerColor[location.pathname];
    // const secondHeaderClass = secondHeaderColor[location.pathname];
    const variant = location.pathname === '/about' ? 'about' : 'default';

    return (
        <div className="header">
            <div className="container">
                <div className="header__container">
                    <button ref={callRefs.setReference} onClick={toggleCallMenu} className={`header__button ${headerClass}`}>
                        hot call <IoIosArrowDown  className={`header__button__icon ${showCallMenu ? 'up' : ''} `} />
                    </button>
                    <p className={`header__logo ${headerClass}`}>Urban Taste</p>
                    <button onClick={onOpenModal} className={`header__button-book ${headerClass}`}>book now</button>
                    {showMenu ? <Icon
                        name='icon-menu-open'
                        ref={menuRefs.setReference}
                        onClick={toggleMenu}
                        className={`header-menu ${headerClass}`}
                    /> :
                    <Icon
                        name='icon-menu-closed'
                        ref={menuRefs.setReference}
                        onClick={toggleMenu}
                        className={`header-menu ${headerClass}`}
                    />}
                </div>
                <HeaderCallMenu variant={variant} callMenu={[showCallMenu, callRefs, callStyles, toggleCallMenuClosed]}/>
                <HeaderNavMenu variant={variant} navMenu={[showMenu, menuRefs, menuStyles, toggleMenuClosed]} />
            </div>
        </div>
    );
}

export default Header;