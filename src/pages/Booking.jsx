import { Link } from "react-router-dom";
const Cinemas = () => {


    return (
        <>
            <div className="booking-wrapper">
                <nav>
                    <div className="booking-nav">
                        <div className="booking-nav-left">
                            <div className="booking-logoimgs">CINEWAVE</div>
                            <div className="booking-nav-search">
                                <input type="text" placeholder="Search..." />
                            </div>
                        </div>
                        <div className="booking-nav-right">
                            <select name="location" id="location" className="booking-nav-Location">
                                <option value="prayagraj">Prayagraj</option>
                                <option value="ghaziabad">Ghaziabad</option>
                                <option value="haryana">Haryana</option>
                            </select>
                            <Link to="/signin"><button className="booking-nav-SignBtn"> Sign In </button></Link>
                        </div>
                    </div>
                    <div className="booking-shadow"></div>
                </nav>

                <section>
                    <div className="booking-section1">
                        <div className="booking-movie">
                            <div className="booking-movie-left">
                                <img src="/MaaPoster.avif" alt="" />
                            </div>
                            <div className="booking-movie-right">
                                <h1>Maa</h1>
                                <div className="booking-movie-desc">
                                    <div>UA16+</div>
                                    <div>Hindi</div>
                                    <div>2 hr 15 min</div>
                                </div>
                                <div className="booking-movie-details-btn">
                                    <button>View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="booking-dates-outer">
                    <div className="booking-dates-inner">
                        <div className="booking-dates-list">
                            <ul>
                                <li className="booking-dates-listItem">
                                    <input type="radio" id="7jul" className="radioBtn" name="radio" />
                                    <label htmlFor="7jul" className="radioBtn-label">
                                        <div className="booking-datesDetails">
                                            <div>MON</div>
                                            <div>07</div>
                                            <div>JUL</div>
                                        </div>
                                    </label>
                                </li>
                                <li className="booking-dates-listItem">
                                    <input type="radio" id="8jul" className="radioBtn" name="radio" />
                                    <label htmlFor="8jul" className="radioBtn-label">
                                        <div className="booking-datesDetails">
                                            <div>TUE</div>
                                            <div>08</div>
                                            <div>JUL</div>
                                        </div>
                                    </label>
                                </li>
                                <li className="booking-dates-listItem">
                                    <input type="radio" id="9jul" className="radioBtn" name="radio" />
                                    <label htmlFor="9jul" className="radioBtn-label">
                                        <div className="booking-datesDetails">
                                            <div>WED</div>
                                            <div>09</div>
                                            <div>JUL</div>
                                        </div>
                                    </label>
                                </li>
                                <li className="booking-dates-listItem">
                                    <input type="radio" id="10jul" className="radioBtn" name="radio" />
                                    <label htmlFor="10jul" className="radioBtn-label">
                                        <div className="booking-datesDetails">
                                            <div>ThU</div>
                                            <div>10</div>
                                            <div>JUL</div>
                                        </div>
                                    </label>
                                </li>
                            </ul>
                        </div>

                        <div className="booking-filters">
                            <ul className="booking-filters-list">
                                <li className="booking-filters-listItem">
                                    <div className="booking-filters-select">HINDI 2D</div>
                                    <div className="booking-dropdownIcon">
                                        <img src="/dropdown.png" alt="" width="20px" />
                                    </div>
                                </li>
                                <li className="booking-filters-listItem">
                                    <div className="booking-filters-select">Price Range</div>
                                    <div className="booking-dropdownIcon">
                                        <img src="/dropdown.png" alt="" width="20px" />
                                    </div>
                                </li>
                                <li className="booking-filters-listItem" style={{ borderRight: "none" }}>
                                    <div className="booking-filters-select">Preferred Time</div>
                                    <div className="booking-dropdownIcon">
                                        <img src="/dropdown.png" alt="" width="20px" />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="booking-shadow"></div>
                </div>

                <section>
                    <div className="booking-cinemas">
                        <ul>
                            <li className="booking-cinemas-list">
                                <div className="booking-cinemas-detail">
                                    <div className="booking-cinemas-detail-left">
                                        <img src="/PVR circle new-e63c67e0-a41d-11ef-8d2a-13243c787688.avif" alt="" />
                                    </div>
                                    <div className="booking-cinemas-detail-right">
                                        <div className="booking-cinema-name">PVR Gaur City,Greater Noida</div>
                                        <div className="booking-cinema-otherDetails">
                                            <div className="booking-cinema-distance">7.2km away</div>
                                            <div className="booking-cinema-status">Allows Cancellation</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="booking-shows">
                                    <ul>
                                        <li><button className="show-timing-btn">10:20 AM</button></li>
                                        <li><button className="show-timing-btn">1:15 PM</button></li>
                                        <li><button className="show-timing-btn">7:35 PM</button></li>
                                        <li><button className="show-timing-btn">10:30 PM</button></li>
                                    </ul>
                                </div>
                            </li>

                            <li className="booking-cinemas-list">
                                <div className="booking-cinemas-detail">
                                    <div className="booking-cinemas-detail-left">
                                        <img src="/Wave-logo-ec278940-8508-11ed-be6e-a3c16d070160[1]-017515f0-b91f-11ef-a67e-a1d27b80970c.avif" alt="" />
                                    </div>
                                    <div className="booking-cinemas-detail-right">
                                        <div className="booking-cinema-name">Wave Cinemas Gaur Central Mall,RDC,Ghaziabad</div>
                                        <div className="booking-cinema-otherDetails">
                                            <div className="booking-cinema-distance">2.6km away</div>
                                            <div className="booking-cinema-status">Allows Cancellation</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="booking-shows">
                                    <ul>
                                        <li><button className="show-timing-btn">10:15 AM</button></li>
                                        <li><button className="show-timing-btn">12:05 PM</button></li>
                                        <li><button className="show-timing-btn">2:10 PM</button></li>
                                        <li><button className="show-timing-btn">8:05 PM</button></li>
                                    </ul>
                                </div>
                            </li>

                            <li className="booking-cinemas-list">
                                <div className="booking-cinemas-detail">
                                    <div className="booking-cinemas-detail-left">
                                        <img src="/usCinemas-b59fbf90-86a3-11ed-babd-1b40982c99df.avif" alt="" />
                                    </div>
                                    <div className="booking-cinemas-detail-right">
                                        <div className="booking-cinema-name">US Cinemas Eros Mall,Indirapuram,Ghaziabad</div>
                                        <div className="booking-cinema-otherDetails">
                                            <div className="booking-cinema-distance">4.5km away</div>
                                            <div className="booking-cinema-status">Non Cancellable</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="booking-shows">
                                    <ul>
                                        <li><button className="show-timing-btn">1:15 PM</button></li>
                                    </ul>
                                </div>
                            </li>

                            <li className="booking-cinemas-list">
                                <div className="booking-cinemas-detail">
                                    <div className="booking-cinemas-detail-left">
                                        <img src="/PVR circle new-e63c67e0-a41d-11ef-8d2a-13243c787688.avif" alt="" />
                                    </div>
                                    <div className="booking-cinemas-detail-right">
                                        <div className="booking-cinema-name">PVR Opulent,The Opulent Mall,Ghaziabad</div>
                                        <div className="booking-cinema-otherDetails">
                                            <div className="booking-cinema-distance">2.9km away</div>
                                            <div className="booking-cinema-status">Allows Cancellation</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="booking-shows">
                                    <ul>
                                        <li><button className="show-timing-btn">9:45 AM</button></li>
                                        <li><button className="show-timing-btn">10:30 AM</button></li>
                                        <li><button className="show-timing-btn">12:05 AM</button></li>
                                        <li><button className="show-timing-btn">1:30 PM</button></li>
                                        <li><button className="show-timing-btn">4:50 PM</button></li>
                                        <li><button className="show-timing-btn">6:40 PM</button></li>
                                        <li><button className="show-timing-btn">8:30 PM</button></li>
                                        <li><button className="show-timing-btn">10:15 PM</button></li>
                                    </ul>
                                </div>
                            </li>

                            <li className="booking-cinemas-list">
                                <div className="booking-cinemas-detail">
                                    <div className="booking-cinemas-detail-left">
                                        <img src="/inox-circle 2-27a89af0-a41e-11ef-8d2a-13243c787688.avif" alt="" />
                                    </div>
                                    <div className="booking-cinemas-detail-right">
                                        <div className="booking-cinema-name">INOX Shipra Mall,Indirapuram,Ghaziabad</div>
                                        <div className="booking-cinema-otherDetails">
                                            <div className="booking-cinema-distance">5.9km away</div>
                                            <div className="booking-cinema-status">Allows Cancellation</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="booking-shows">
                                    <ul>
                                        <li><button className="show-timing-btn">1:15 PM</button></li>
                                        <li><button className="show-timing-btn">4:55 PM</button></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
                <section>
                    <div className="booking-shadow"></div>
                    <div className="Booking-link">
                        <Link to="/"><div>Home</div></Link>
                        <div>→</div>
                        <div>Movies</div>
                        <div>→</div>
                        <div>Maa</div>
                        <div>→</div>
                        <div>Book tickets</div>
                    </div>
                    <div className="booking-shadow"></div>
                </section>
            </div>
        </>
    )
}
export default Cinemas;