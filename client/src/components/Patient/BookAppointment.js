import { Outlet, Link } from "react-router-dom";
import { React, useState } from "react";
import { useForm } from "react-hook-form";

import DoctorImg1 from "../../images/doc-1.jpg"; 

const BookAppointment = () => {
    
    const [message, setMessage] = useState('');
    const { register, handleSubmit, errors, reset } = useForm();

    const onSubmit = (data, e) => {
        e.preventDefault();
        alert('Booking Successfully!');
        reset();
      };

    return (
        <div>
            {/* Booking Section */}
            <section class="book" id="booking">

            <h1 class="heading"> <span>book</span> now </h1>    

            <div class="row">

            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <h3>book appointment</h3>
                <h4>with</h4>

                <div class="left">
                    <img src={DoctorImg1} alt="user" width="100"/>
                    <h4>Alex William</h4>
                    <p>Surgeon Doctor</p>
                </div>

                <input
                    name = "patientName"
                    type="text"
                    placeholder="your name"
                    class="box"/>

                <input
                    name = "patientNumber"
                    type="number"
                    placeholder="your number"
                    class="box"/>

                <input
                    name = "patientEmail"
                    type="email"
                    placeholder="your email"
                    class="box"/>

                <input
                    name = "dateOfAppointment"
                    type="date"
                    class="box"/>

                <input
                    name = "submit"
                    type="submit"
                    value="book now"
                    class="btn"/>
            </form>
            </div>
            </section>
            <Outlet />
        </div>
        );
}

export default BookAppointment;
