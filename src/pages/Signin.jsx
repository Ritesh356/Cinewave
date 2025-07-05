import TextField from '@mui/material/TextField';
import { IoMdEye } from "react-icons/io";
import { Link } from "react-router-dom";
import { GiFilmProjector } from "react-icons/gi";

export function Signin() {
    return (
        <>
            <section className="signinpage  " style={{ backgroundImage: `url("/background.png")` }} >
                <div className="logoimgs">
                    CINEWAVE
                </div>
                <div className="signinbox ">
                    <div className=" toptitle d-flex justify-content-center">
                        <div className="d-flex gap-3 align-items-center"><b>Sign In</b></div>
                        
                    </div>

                    <div className="username ps-3 pb-3 pe-3 ms-1 me-3">
                        <TextField id="standard-basic" label="Email" required variant="standard" className="w-100 mb-2" sx={{
                            input: { color: '#fff' },
                            label: { color: '#bbb' },
                            '& .MuiInput-underline:before': { borderBottomColor: '#555' },
                            '& .MuiInput-underline:after': { borderBottomColor: '#fff' },
                            '& .MuiInput-underline:hover:not(.Mui-disabled):before': { borderBottomColor: '#888' },
                        }} />
                        <TextField id="standard-basic" label="Password" type="password" variant="standard" className="w-100" sx={{
                            input: { color: '#fff' },
                            label: { color: '#bbb' },
                            '& .MuiInput-underline:before': { borderBottomColor: '#555' },
                            '& .MuiInput-underline:after': { borderBottomColor: '#fff' },
                            '& .MuiInput-underline:hover:not(.Mui-disabled):before': { borderBottomColor: '#888' },
                        }} />
                        <div className="eyebtn ">
                            <IoMdEye />
                        </div>
                    </div>
                    <div className="forget ps-4 ms-1">
                        <a href="#">Forgot Password ?</a>
                    </div>
                    <button className="signinbtn btn btn-primary w-100 mt-3">Sign In</button>
                    <p className="ps-3 mt-3 text-medium ">Not Registered? <Link to="/signup">Sign Up</Link></p>
                     <div className="loginwgoogle shadow mt-5 ps-3 d-flex align-items-center pt-2 ">
                        <span className="google "><img src="/apple.png" /></span>
                        <span><h4><b>Sign in with apple</b></h4></span>
                        
                    </div>
                    <div className="loginwgoogle shadow mt-1 ps-3 d-flex align-items-center pt-2">
                        <span className="google "><img src="/google.png" /></span>
                        <span><h4><b>Sign in with Google</b></h4></span>
                        
                    </div>

                </div>

            </section>

        </>
    )
}