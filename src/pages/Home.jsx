import React, { useRef } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const carouselRef = useRef(null);

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
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

            {/* Custom Carousel */}
            <div className="carousel-wrapper">
                <h1 className="heading_carousel">Recommended Movies</h1>
                <button className="scroll-btn left" onClick={scrollLeft}>❮</button>

                <div className="carousel-scroll" ref={carouselRef}>
                    <div className="carousel-item"><img src="/maa.jpg" alt="maa" /></div>
                    <div className="carousel-item"><img src="/sitaare-zamin-par.jpg" alt="sitaare" /></div>
                    <div className="carousel-item"><img src="/jurrasicworld.jpg" alt="jurrasic" /></div>
                    <div className="carousel-item"><img src="/housefull5.jpg" alt="housefull" /></div>
                    <div className="carousel-item"><img src="/kannapa.jpg" alt="kannapa" /></div>
                    <div className="carousel-item"><img src="/themovie.jpg" alt="the movie" /></div>
                    <div className="carousel-item"><img src="/mertro.jpg" alt="metro" /></div>
                </div>

                <button className="scroll-btn right" onClick={scrollRight}>❯</button>
            </div>

            <div className="beech_ki_photo"><img src="faltu.jpg" alt="" /></div>

            <div className="carousel-wrapper premiere_carousel">
                <h1 className="heading_carousel">Premieres</h1>
                <h4>Brand new releases for you</h4>
                <button className="scroll-btn left" onClick={scrollLeft}>❮</button>

                <div className="carousel-scroll" ref={carouselRef}>
                    <div className="carousel-item"><img src="/premiere1.jpg" alt="premiere1" /></div>
                    <div className="carousel-item"><img src="/premiere2.jpg" alt="premiere2" /></div>
                    <div className="carousel-item"><img src="/premiere3.jpg" alt="premiere3" /></div>
                    <div className="carousel-item"><img src="/premiere4.jpg" alt="premiere4" /></div>
                    <div className="carousel-item"><img src="/premiere5.jpg" alt="premiere5" /></div>
                    <div className="carousel-item"><img src="/premiere6.jpg" alt="premiere6" /></div>
                    <div className="carousel-item"><img src="/premiere7.jpg" alt="premiere7" /></div>
                </div>

                <button className="scroll-btn right" onClick={scrollRight}>❯</button>
            </div>


            <div className="separation"></div>

            <footer>
                <div class="questions">
                    Questions? Call 000-800-919-1694
                </div>
                <div class="footer">
                    <div class="footer-item">
                        <a href="faq">Investor Relations</a>
                        <a href="faq">Jobs</a>
                        <a href="faq">Ways to Watch</a>
                        <a href="faq">Terms of Use</a>
                    </div>

                    <div class="footer-item">
                        <a href="faq">Help Centre</a>
                        <a href="faq">Account</a>
                        <a href="faq">Speed Test</a>
                        <a href="faq">Legal Notices</a>
                    </div>
                    <div class="footer-item">
                        <a href="faq">Media Centre</a>
                        <a href="faq">Privacy</a>
                        <a href="faq">Cookie Preferences</a>
                        <a href="faq">Corporate</a>
                    </div>

                    <div class="footer-item">
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