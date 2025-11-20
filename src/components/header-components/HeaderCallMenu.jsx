import Icon from '../Icon.jsx';

function HeaderCallMenu({ variant = "default", callMenu }) {
    
    const [showCallMenu, callRefs, callStyles, toggleCallMenuClosed] = callMenu;

    const aboutPage = variant === 'about';

    return (
        <div ref={callRefs.setFloating}
            style={callStyles} className={`header-call-menu ${showCallMenu ? "show" : ""} ${aboutPage ? 'about-page' : '' }`}>
            <address className="header-call-menu__address">
                <ul className="header-call-menu__contacts">
                    <li><a className={`${aboutPage ? 'about-page' : ''}`} href="tel:+15551234567">+1 (555) 123-4567</a></li>
                    <li><a className={`${aboutPage ? 'about-page' : ''}`} href="mailto:info@urbantaste.com">info@urbantaste.com</a></li>
                </ul>
                <div>
                    <ul className="header-call-menu__social">
                        <li><a href="/" target="__blank"><Icon name='icon-instagram-logo' className={`header-call-menu__icons ${aboutPage ? 'about-page' : '' }`} onClick={toggleCallMenuClosed} /></a></li>
                        <li><a href="/" target="__blank"><Icon name='icon-telegram-logo' className={`header-call-menu__icons ${aboutPage ? 'about-page' : '' }`} onClick={toggleCallMenuClosed}/></a></li>
                        <li><a href="/" target="__blank"><Icon name='icon-facebook-logo' className={`header-call-menu__icons ${aboutPage ? 'about-page' : '' }`} onClick={toggleCallMenuClosed}/></a></li>
                    </ul> 
                </div>
            </address>
        </div>
    );
}

export default HeaderCallMenu;