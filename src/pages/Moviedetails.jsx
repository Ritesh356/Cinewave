import React, { useRef } from "react";
import { Link } from "react-router-dom";
import FooterSection from "../components/FooterSection.jsx";

const Moviedetails = () => {

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
            <div className="moviedetails">
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
                <div className="navigationbar2">
                    <div className="leftnav">
                        <ul>
                            <li>Movies</li>
                            <li>Stream</li>
                            <li>Events</li>
                            <li>Plays</li>
                            <li>Sports</li>
                            <li>Activities</li>
                        </ul>
                    </div>
                    <div className="rightnav">
                        <ul>
                            <li>ListYourShow</li>
                            <li>Corporates</li>
                            <li>Offers</li>
                            <li>Gift Cards</li>
                        </ul>
                    </div>
                </div>
                <div className="poster">
                    <div className="box1"></div>
                    <div className="movieinfo">
                        <ul>
                            <li>
                                <img src="maa.jpg" alt="" />
                            </li>
                            <li className="right-li-info index">
                                <h1>Maa</h1>
                                <div className="rating-box">
                                    <span>8.4/10</span>
                                    <span>(2.4K Votes)</span>
                                </div>
                                <div className="info-buttons">
                                    <button>2D</button>
                                    <button>Hindi</button>
                                </div>
                                <div className="time-and-type">
                                    <span>2h 32m </span>
                                    <span>Action, Crime, Drama, Period  .  A  .  11 jul, 2025</span>
                                </div>
                                <div className="bookingbutton">
                                    <button>Book tickets</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="extra-info">
                        <h1>About the movies</h1>
                        <div>The story of a mother who becomes Kali to end a demonic curse rooted in fear, blood, and betrayal.</div>
                    </div>
                    <div className="cast">
                        <h1>Cast</h1>
                        <div className="castimages">
                            <img src="profile.jpg" alt="" />
                            <img src="profile.jpg" alt="" />
                            <img src="profile.jpg" alt="" />
                        </div>
                    </div>
                    <div className="crew">
                        <h1>Crew</h1>
                        <div className="crewimages">
                            <img src="profile.jpg" alt="" />
                            <img src="profile.jpg" alt="" />
                            <img src="profile.jpg" alt="" />
                            <img src="profile.jpg" alt="" />
                            <img src="profile.jpg" alt="" />
                            <img src="profile.jpg" alt="" />
                        </div>

                    </div>
                </div>

                <div className="carousel-wrapper-moviedetails">
                    <h1 className="heading-carousel-moviedetails">Recommended Movies</h1>
                    <button className="scroll-btn left" onClick={() => scrollLeft(carouselRef1)}>❮</button>

                    <div className="carousel-scroll" ref={carouselRef1}>
                        <div className="carousel-items"><img src="/sitaare-zamin-par.jpg" alt="sitaare" /></div>
                        <div className="carousel-items"><img src="/jurrasicworld.jpg" alt="jurrasic" /></div>
                        <div className="carousel-items"><img src="/housefull5.jpg" alt="housefull" /></div>
                        <div className="carousel-items"><img src="/kannapa.jpg" alt="kannapa" /></div>
                        <div className="carousel-items"><img src="/themovie.jpg" alt="the movie" /></div>
                        <div className="carousel-items"><img src="/mertro.jpg" alt="metro" /></div>
                    </div>

                    <button className="scroll-btn right" onClick={() => scrollRight(carouselRef1)}>❯</button>
                </div>

                <FooterSection/>
            </div>
        </>
    );
};

export default Moviedetails;
