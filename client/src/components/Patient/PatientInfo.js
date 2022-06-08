import { Outlet, Link } from "react-router-dom";
import { React, useState } from "react";
import { useForm } from "react-hook-form";

import DoctorImg1 from "../../images/doc-1.jpg";

const PatientInfo = () => {
    const [message, setMessage] = useState('');
    const { register, handleSubmit, errors, reset } = useForm();

    const onSubmit = (data, e) => {
        e.preventDefault();
        alert('Booking Successfully!');
        reset();
      };
    return (
        <div>
            <div class="wrapper" id="doctor-info">
                <div class="left">
                    <img src={DoctorImg1} alt="user" width="100"/>
                    <h4>Alex William</h4>
                    <p>Patient's Medical Record</p>
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
                                <p>Patient</p>
                            </div>
                            <div class="data">
                            <h4>Experience</h4>
                                <p>20+ Years</p>
                        </div>
                        </div>
                    </div>
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <h3 className="btn">Confirm Appointment <span class="fas fa-chevron-right"></span></h3>
                    </form>
                
                </div>
            </div>

        <Outlet />
        </div>
    )
}

export default PatientInfo;