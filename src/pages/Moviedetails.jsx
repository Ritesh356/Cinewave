import React, { useRef } from "react";
import { Link } from "react-router-dom";

const Moviedetails = () => {

    return (
        <>
            <div className="Movie_details">
                <div className="Filter">
                    <h1>hello</h1>
                    <span className="Filter_word">Filter</span>
                    <div className="Filter_buttons">
                        <button type="button">Hindi</button>
                        <button type="button">Telugu</button>
                        <button type="button">Tamil</button>
                        <button type="button">Kannada</button>
                        <button type="button">Malayalam</button>
                        <button type="button">English</button>
                        <button type="button">Bengali</button>
                        <button type="button">Marathi</button>
                        <button type="button">Punjabi</button>
                        <button type="button">Gujarati</button>
                        <button type="button">Odia</button>
                        <button type="button">Bhojpuri</button>
                        <button type="button">Manipuri</button>
                        <button type="button">Japanese</button>
                        <button type="button">Khasi</button>
                    </div>
                </div>
                <div className="Upcoming_Movies">
                        <img src="maa.jpg" alt="" />
                        <img src="maa.jpg" alt="" />
                        <img src="maa.jpg" alt="" />
                        <img src="maa.jpg" alt="" />
                        <img src="maa.jpg" alt="" />
                        <img src="maa.jpg" alt="" />
                        <img src="maa.jpg" alt="" />
                        <img src="maa.jpg" alt="" />
                        <img src="maa.jpg" alt="" />
                        <img src="maa.jpg" alt="" />
                        <img src="maa.jpg" alt="" />
                        <img src="maa.jpg" alt="" />
                        <img src="maa.jpg" alt="" />
                        <img src="maa.jpg" alt="" />
                </div>
            </div>
        </>
    );
};

export default Moviedetails;
