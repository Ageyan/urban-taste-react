import { Link } from "react-router-dom";
import BookingForm from "../BookingForm";
import Icon from "../Icon";

function ContactsPage() {

    const handleUp = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <>
            <section className="contact-section">
                <div className="container">
                    <h2 className="contact-section__title">Contact</h2>
                    <div className="contact-section__container">
                        <BookingForm variant="contact"/>
                        <div className='contact-section__info-container'>
                            <address>
                                <ul className="contact-section__info">
                                    <li>Location: 123 Main Street, New York</li>
                                    <li>Phone: +1 (555) 123-4567</li>
                                    <li>info@urbantaste.com</li>
                                </ul>
                            </address>
                            <iframe
                                className="contact-section__map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.984620182229!2d-73.8313912!3d40.762363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2600feab8eaf3%3A0xf2c8bcc288c78f3!2zMS0yMyBNYWluIFN0LCBRdWVlbnMsIE5ZIDEwMDAxLCDQodCo0JA!5e0!3m2!1sru!2sua!4v1761162733725!5m2!1sru!2sua"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="footer">
                <div className="container">
                    <div className="footer__container">
                        <p className="footer__logo">Urban Taste</p>
                        <ul className="footer__list">
                            <li><Link className="footer__link" onClick={handleUp} to="/">Home</Link></li>
                            <li><Link className="footer__link" onClick={handleUp} to="/about">About</Link></li>
                            <li><Link className="footer__link" onClick={handleUp} to="/menu">Menu</Link></li>
                            <li><Link className="footer__link" onClick={handleUp} to="/contacts">Contact</Link></li>
                        </ul>
                        <address>
                            <ul className="footer__info">
                                <li><a href="https://maps.app.goo.gl/GmfMDWeGPkTP6rPz7" target="_blank">Location: 123 Main Street, New York</a></li>
                                <li><a href="tel:+15551234567">Phone: +1 (555) 123-4567</a></li>
                                <li><a href="mailto:info@urbantaste.com" target="_blank">info@urbantaste.com</a></li>
                            </ul>
                            <ul className="footer__menu-social">
                                <li><a href="/" target="__blank"><Icon name='icon-instagram-logo' className="footer__menu-icon"/></a></li>
                                <li><a href="/" target="__blank"><Icon name='icon-telegram-logo' className="footer__menu-icon"/></a></li>
                                <li><a href="/" target="__blank"><Icon name='icon-facebook-logo' className="footer__menu-icon"/></a></li>
                            </ul>
                        </address>
                    </div>
                    <p className="footer__copy-text">&copy; 2025 Urban Taste.</p>
                </div>
            </footer>
        </>
    );
}

export default ContactsPage;