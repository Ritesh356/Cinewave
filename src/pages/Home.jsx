import React, { useRef } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const carouselRef1 = useRef(null);
    const carouselRef2 = useRef(null);

    const scrollLeft = (ref) => {
        if (ref.current) {
            ref.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = (ref) => {
        if (ref.current) {
            ref.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };


    return (
        <>
            <div className="main_class">
                <div className="box"></div>
                <nav className="navigationbar">
                    <span className="nav_left">
                        <img className="logo_class" src="/netflix_logo.jpg" alt="Logo" />
                        <input type="text" className="search_input" placeholder="   Search..." />
                    </span>
                    <div className="nav_right">
                        <button className="nav_button nav_b1"> Prayagraj </button>
                        <Link to="/signin"><button className="nav_button nav_b2"> Sign Up </button></Link>
                    </div>
                </nav>
                <div className="hello">
                    <h1>Enjoy The Latest Movies And Shows</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem possimus laborumvolupta molestip erspiciatis fuga.</p>
                </div>
            </div>

            {/* Recommended Movies Carousel */}
            <div className="carousel-wrapper">
                <h1 className="heading_carousel">Recommended Movies</h1>
                <button className="scroll-btn left" onClick={() => scrollLeft(carouselRef1)}>❮</button>

                <div className="carousel-scroll" ref={carouselRef1}>
                    <div className="carousel-items"><img src="/maa.jpg" alt="maa" /></div>
                    <div className="carousel-items"><img src="/sitaare-zamin-par.jpg" alt="sitaare" /></div>
                    <div className="carousel-items"><img src="/jurrasicworld.jpg" alt="jurrasic" /></div>
                    <div className="carousel-items"><img src="/housefull5.jpg" alt="housefull" /></div>
                    <div className="carousel-items"><img src="/kannapa.jpg" alt="kannapa" /></div>
                    <div className="carousel-items"><img src="/themovie.jpg" alt="the movie" /></div>
                    <div className="carousel-items"><img src="/mertro.jpg" alt="metro" /></div>
                </div>

                <button className="scroll-btn right" onClick={() => scrollRight(carouselRef1)}>❯</button>
            </div>

            <div className="beech_ki_photo"><img src="/faltu.jpg" alt="faltu" /></div>

            {/* Premiere Carousel */}
            <div className="carousel-wrapper premiere_carousel">
                <h1 className="heading_carousel">Premieres</h1>
                <h4>Brand new releases for you</h4>
                <button className="scroll-btn left" onClick={() => scrollLeft(carouselRef2)}>❮</button>

                <div className="carousel-scroll" ref={carouselRef2}>
                    <div className="carousel-items">
                        <img src="/premiere1.jpg" alt="premiere1" />
                    </div>
                    <div className="carousel-items"><img src="/premiere2.jpg" alt="premiere2" /></div>
                    <div className="carousel-items"><img src="/premiere3.jpg" alt="premiere3" /></div>
                    <div className="carousel-items"><img src="/premiere4.jpg" alt="premiere4" /></div>
                    <div className="carousel-items"><img src="/premiere5.jpg" alt="premiere5" /></div>
                    <div className="carousel-items"><img src="/premiere6.jpg" alt="premiere6" /></div>
                    <div className="carousel-items"><img src="/premiere7.jpg" alt="premiere7" /></div>
                </div>

                <button className="scroll-btn right" onClick={() => scrollRight(carouselRef2)}>❯</button>
            </div>

            <div className="separation"></div>

            <footer>
                <div className="questions">
                    Questions? Call 000-800-919-1694
                </div>
                <div className="footer">
                    <div className="footer-item">
                        <a href="faq">Investor Relations</a>
                        <a href="faq">Jobs</a>
                        <a href="faq">Ways to Watch</a>
                        <a href="faq">Terms of Use</a>
                    </div>

                    <div className="footer-item">
                        <a href="faq">Help Centre</a>
                        <a href="faq">Account</a>
                        <a href="faq">Speed Test</a>
                        <a href="faq">Legal Notices</a>
                    </div>
                    <div className="footer-item">
                        <a href="faq">Media Centre</a>
                        <a href="faq">Privacy</a>
                        <a href="faq">Cookie Preferences</a>
                        <a href="faq">Corporate</a>
                    </div>

                    <div className="footer-item">
                        <a href="faq">Contact Us</a>
                        <a href="faq">Speed Test</a>
                        <a href="faq">Legal Notices</a>
                        <a href="faq">Only on Netflix</a>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Home;