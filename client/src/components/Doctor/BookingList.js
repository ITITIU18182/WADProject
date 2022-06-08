import { Outlet, Link } from "react-router-dom";

import DoctorImg1 from "../../images/doc-1.jpg";
import DoctorImg2 from "../../images/doc-2.jpg";
import DoctorImg3 from "../../images/doc-3.jpg";
import DoctorImg4 from "../../images/doc-4.jpg";
import DoctorImg5 from "../../images/doc-5.jpg";
import DoctorImg6 from "../../images/doc-6.jpg";


const Blog = () => {

    

    return(
        <div>
            <section class="blogs" id="bookinglist">

            <h1 class="heading"> Bookings <span>List</span> </h1>

            <h1 class="heading"> Bookings <span>List</span> </h1>

            <div class="box-container">

                <div class="box">
                    <div class="image">
                        <img src={DoctorImg1} alt=""/>
                    </div>

                    <div class="content">
                        <div class="icon">
                            <Link to="/" className="fas fa-calendar"> 1st may, 2021 </Link>
                        </div>
                        <h3>Patient Name</h3>
                        <p>Briefly Description About Patient's Condition</p>
                        <Link to="/PatientInfo" className="btn"> View Details <span class="fas fa-chevron-right"></span> </Link>
                    </div>
                </div>

                <div class="box">
                    <div class="image">
                        <img src={DoctorImg2} alt=""/>
                    </div>
                    <div class="content">
                        <div class="icon">
                        <Link to="/" className="fas fa-calendar"> 1st may, 2021 </Link>
                        </div>
                        <h3>Patient Name</h3>
                        <p>Briefly Description About Patient's Condition</p>
                        <Link to="/PatientInfo" className="btn"> View Details <span class="fas fa-chevron-right"></span> </Link>
                    </div>
                </div>

                <div class="box">
                    <div class="image">
                        <img src={DoctorImg3} alt=""/>
                    </div>
                    <div class="content">
                        <div class="icon">
                            <Link to="/" className="fas fa-calendar"> 1st may, 2021 </Link>
                        </div>
                        <h3>Patient Name</h3>
                        <p>Briefly Description About Patient's Condition</p>
                        <Link to="/PatientInfo" className="btn"> View Details <span class="fas fa-chevron-right"></span> </Link>
                    </div>
                </div>
                <div class="box">
                    <div class="image">
                        <img src={DoctorImg4} alt=""/>
                    </div>
                    <div class="content">
                        <div class="icon">
                            <Link to="/" className="fas fa-calendar"> 1st may, 2021 </Link>
                        </div>
                        <h3>Patient Name</h3>
                        <p>Briefly Description About Patient's Condition</p>
                        <Link to="/PatientInfo" className="btn"> View Details <span class="fas fa-chevron-right"></span> </Link>
                    </div>
                </div>
                <div class="box">
                    <div class="image">
                        <img src={DoctorImg5} alt=""/>
                    </div>
                    <div class="content">
                        <div class="icon">
                            <Link to="/" className="fas fa-calendar"> 1st may, 2021 </Link>
                        </div>
                        <h3>Patient Name</h3>
                        <p>Briefly Description About Patient's Condition</p>
                        <Link to="/PatientInfo" className="btn"> View Details <span class="fas fa-chevron-right"></span> </Link>
                    </div>
                </div>
                <div class="box">
                    <div class="image">
                        <img src={DoctorImg6} alt=""/>
                    </div>
                    <div class="content">
                        <div class="icon">
                            <Link to="/" className="fas fa-calendar"> 1st may, 2021 </Link>
                        </div>
                        <h3>Patient Name</h3>
                        <p>Briefly Description About Patient's Condition</p>
                        <Link to="/PatientInfo" className="btn"> View Details <span class="fas fa-chevron-right"></span> </Link>
                    </div>
                </div>

            </div>
            </section>
        <Outlet />
        </div>
    )
}

export default Blog;
