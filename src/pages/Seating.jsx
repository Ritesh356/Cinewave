import { Link } from "react-router-dom";
const Seating = () => {
    const day = "Wed"
    const date = '7 jul';
    const showTime = '10:20AM';
    const cinema = 'PVR Gaur City,Greater Noida';
    const cols=20;
    const rows=13;
    return (
        <div className="seating-wrapper">
            <nav>
                <div className="seating-nav">
                    <div className="seating-logoimgs">CINEWAVE</div>
                    <div className="seating-movie-details">
                        <div className="seating-movie-name">Maa</div>
                        <div className="seating-showDetails">{date},{showTime} at {cinema}</div>
                    </div>
                    <Link to="/signin"><button className="booking-nav-SignBtn"> Sign In </button></Link>
                </div>
                <div className="booking-shadow"></div>
            </nav>
            <section>
                <div className="seating-container">
                    <div className="seating-container-header">
                        <div className="seating-movieDate">
                            <div>{day}</div>
                            <div>{date}</div>
                        </div>
                        <div className="seating-shows">
                            <ul>
                                <li><button className="seating-show-timing-btn">10:20 AM</button></li>
                                <li><button className="seating-show-timing-btn">1:15 PM</button></li>
                                <li><button className="seating-show-timing-btn">7:35 PM</button></li>
                                <li><button className="seating-show-timing-btn">10:30 PM</button></li>
                            </ul>
                        </div>
                    </div>
                    <div className="seating-layout" cols={18} rows={15}>
                        {(() => {
                            const seatsRows = [];
                            for (let i = 0; i < rows+1; i++) {
                                const seats = [];
                                for (let j = 0; j < cols+1; j++) {
                                    if (j == 0) {
                                        seats.push(
                                            <div className="row-label">
                                                {String.fromCharCode(65 + rows - i)}
                                            </div>
                                        )
                                    }
                                    else if(j==10){
                                        seats.push(
                                            <div
                                                key={`seat-${i+1}-${j+1}`}
                                                className="seats seat-middle seatAvailable"
                                                data-row={i+1}
                                                data-col={j+1}
                                            >{j}</div>
                                        )
                                    }
                                    else {
                                        seats.push(
                                            <div
                                                key={`seat-${i+1}-${j+1}`}
                                                className="seats seatAvailable"
                                                data-row={i+1}
                                                data-col={j+1}
                                            >{j}</div>
                                        )
                                    }
                                }
                                seatsRows.push(
                                    <div className="seatRows" key={`row-${i+1}`}>
                                        {seats}
                                    </div>
                                )
                            }
                            return seatsRows;
                        })()}
                        <div className="screen-img">
                            <img src="/screen.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="booking-shadow"></div>
            </section>
            <footer className="seating-footer">
                <div className="seating-footer-details">
                    <div className="seating-screen">SCREEN THIS WAY</div>
                    <div className="seating-screen-seatIdentifier">
                        <div className="seating-screen-seatAvailable">
                            <span className="seat seatAvailable"></span>
                            <p>Available</p>
                        </div>
                        <div className="seating-screen-seatOccupied">
                            <span className="seat seatOccupied"></span>
                            <p>Occupied</p>
                        </div>
                        <div className="seating-screen-seatSelected">
                            <span className="seat seatSelected"></span>
                            <p>Selected</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Seating;