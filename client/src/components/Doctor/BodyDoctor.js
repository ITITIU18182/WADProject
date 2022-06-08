import { Outlet, Link } from "react-router-dom";

import BookingList from "./BookingList";
import PatientList from "./PatientList";


const BodyAdmin = () => {
    return(
        <div>
            <BookingList>

            </BookingList>


            <PatientList>

            </PatientList>


            <Outlet />
        </div>
    )
}

export default BodyAdmin;
