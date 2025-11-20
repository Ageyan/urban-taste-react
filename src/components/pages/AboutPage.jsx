import AboutImage1 from '../../assets/images/about-section-image-1.jpg';
import AboutImage2 from '../../assets/images/about-section-image-2.jpg';
import AboutImage3 from '../../assets/images/about-section-image-3.jpg';
import AboutImage4 from '../../assets/images/about-section-image-4.jpg';
import AboutImage5 from '../../assets/images/about-section-image-5.jpg';
import AboutImage6 from '../../assets/images/about-section-image-6.jpg';


function AboutPage() {
    return (
        <section className="about-section">
            <div className="container">
                <div>
                    <h2 className="about-section__title">About</h2>
                    <div className='about-section__first-container'>
                        <img className='about-section__first-image' src={AboutImage1} alt="free tables on the veranda" />
                        <div style={{width: '100%', display: 'flex', alignItems: 'flex-end', flexDirection: 'column'}}>
                            <h2 className="about-section__title-desk">About</h2>
                            <p className='about-section__first-text'>Urban Taste is a modern casual dining restaurant where global flavors meet in one place.</p>
                            <img className='about-section__second-image' src={AboutImage2} alt="dish on a plate" />
                        </div>
                        <img className='about-section__third-image' src={AboutImage3} alt="inverted glasses" />
                    </div>
                    <div>
                        <p className='about-section__second-text'>We bring together the best comfort food from around the world — from juicy burgers and authentic pasta to fresh bowls, artisan pizzas, and signature steaks.</p>
                        <img className='about-section__fourth-image' src={AboutImage4} alt="people are sitting in a restaurant on the street" />
                    </div>
                    <div className='about-section__third-container'>
                        <p style={{zIndex: '3'}}className='about-section__third-text'>Our mission is simple: to create a place where everyone can find something they love, whether it’s a quick lunch, a cozy dinner, or a sweet treat with friends.</p>
                        <img className='about-section__fifth-image' src={AboutImage5} alt="the cook is preparing a dish" />
                        <img className='about-section__sixth-image' src={AboutImage6} alt="dish on a plate" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutPage;