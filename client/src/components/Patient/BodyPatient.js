import { Outlet, Link } from "react-router-dom";

import DoctorList from './DoctorList';
import BookAppointment from './BookAppointment';

const BodyPatient = () => {
    return(
        <div>
            <DoctorList>

            </DoctorList>



            <Outlet />
        </div>
    )
}

export default BodyPatient;
