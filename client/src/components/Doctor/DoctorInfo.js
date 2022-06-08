import { Outlet, Link } from "react-router-dom";

import DoctorImg1 from "../../images/doc-1.jpg";

const DoctorInfo = () => {
    return (
        <div>
            <div class="wrapper" id="doctor-info">
                <div class="left">
                    <img src={DoctorImg1} alt="user" width="100"/>
                    <h4>Alex William</h4>
                    <p>Surgeon Doctor</p>
                </div>
                <div class="right">
                    <div class="info">
                        <h3>Information</h3>
                        <div class="info_data">
                            <div class="data">
                                <h4>Email</h4>
                                <p>alex@gmail.com</p>
                            </div>
                            <div class="data">
                            <h4>Phone</h4>
                                <p>0001-213-998761</p>
                        </div>
                        </div>
                    </div>
      
                <div class="projects">
                     <h3>Speciality</h3>
                        <div class="projects_data">
                            <div class="data">
                                <h4>Types of</h4>
                                <p>Surgeon</p>
                            </div>
                            <div class="data">
                            <h4>Experience</h4>
                                <p>20+ Years</p>
                        </div>
                        </div>
                    </div>
      
                    <div class="social_media">
                    <Link to= "/BookAppointment" className="btn"> Book Appointment <span class="fas fa-chevron-right"></span> </Link>
                </div>
                </div>
            </div>

        <Outlet />
        </div>
    )
}

export default DoctorInfo;