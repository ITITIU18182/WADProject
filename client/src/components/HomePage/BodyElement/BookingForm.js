import { Outlet, Link } from "react-router-dom";

import BookingImg from "../../../images/book-img.svg";

const BookingForm = () => {
    return (
        <div>
            {/* Booking Section */}
            <section class="book" id="booking">

            <h1 class="heading"> <span>book</span> now </h1>    

            <div class="row">

                <div class="image">
                    <img src={BookingImg} alt=""/>
                </div>
            <form action="">
                <h3>book appointment</h3>
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

export default BookingForm;
