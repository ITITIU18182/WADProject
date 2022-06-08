import { Outlet, Link } from "react-router-dom";

import DoctorImg1 from "../../images/doc-1.jpg";
import DoctorImg2 from "../../images/doc-2.jpg";
import DoctorImg3 from "../../images/doc-3.jpg";
import DoctorImg4 from "../../images/doc-4.jpg";
import DoctorImg5 from "../../images/doc-5.jpg";
import DoctorImg6 from "../../images/doc-6.jpg";


const Doctor = () => {
    return(
        <div>
            <section class="doctors" id="patientlist">

            <h1 class="heading"> Patients <span>List</span> </h1>

            <div class="box-container">

                <div class="box">
                    <img src= {DoctorImg1} alt=""/>
                    <h3>john deo</h3>
                    <span>expert doctor</span>
                    <div class="share">
                        <Link to="/" className="fab fa-facebook-f"> </Link>
                        <Link to="/" className="fab fa-twitter"> </Link>
                        <Link to="/" className="fab fa-instagram"> </Link>
                        <Link to="/" className="fab fa-linkedin"> </Link>
                    </div>
                </div>

                <div class="box">
                <img src= {DoctorImg2} alt=""/>
                    <h3>john deo</h3>
                    <span>expert doctor</span>
                    <div class="share">
                        <Link to="/" className="fab fa-facebook-f"> </Link>
                        <Link to="/" className="fab fa-twitter"> </Link>
                        <Link to="/" className="fab fa-instagram"> </Link>
                        <Link to="/" className="fab fa-linkedin"> </Link>
                    </div>
                </div>

                <div class="box">
                <img src= {DoctorImg3} alt=""/>
                    <h3>john deo</h3>
                    <span>expert doctor</span>
                    <div class="share">
                        <Link to="/" className="fab fa-facebook-f"> </Link>
                        <Link to="/" className="fab fa-twitter"> </Link>
                        <Link to="/" className="fab fa-instagram"> </Link>
                        <Link to="/" className="fab fa-linkedin"> </Link>
                    </div>
                </div>

                <div class="box">
                <img src= {DoctorImg4} alt=""/>
                    <h3>john deo</h3>
                    <span>expert doctor</span>
                    <div class="share">
                        <Link to="/" className="fab fa-facebook-f"> </Link>
                        <Link to="/" className="fab fa-twitter"> </Link>
                        <Link to="/" className="fab fa-instagram"> </Link>
                        <Link to="/" className="fab fa-linkedin"> </Link>
                    </div>
                </div>

                <div class="box">
                <img src= {DoctorImg5} alt=""/>
                    <h3>john deo</h3>
                    <span>expert doctor</span>
                    <div class="share">
                        <Link to="/" className="fab fa-facebook-f"> </Link>
                        <Link to="/" className="fab fa-twitter"> </Link>
                        <Link to="/" className="fab fa-instagram"> </Link>
                        <Link to="/" className="fab fa-linkedin"> </Link>
                    </div>
                </div>

                <div class="box">
                <img src= {DoctorImg6} alt=""/>
                    <h3>john deo</h3>
                    <span>expert doctor</span>
                    <div class="share">
                        <Link to="/" className="fab fa-facebook-f"> </Link>
                        <Link to="/" className="fab fa-twitter"> </Link>
                        <Link to="/" className="fab fa-instagram"> </Link>
                        <Link to="/" className="fab fa-linkedin"> </Link>
                    </div>
                </div>
            </div>

            </section>
            <Outlet />
        </div>
    )
}

export default Doctor;