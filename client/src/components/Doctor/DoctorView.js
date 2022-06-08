import { Outlet, Link } from "react-router-dom";


import HeaderDoctor from './HeaderDoctor';
import BodyDoctor from './BodyDoctor';


const DoctorView = () => {
    return (
        <div>
            <HeaderDoctor>

            </HeaderDoctor>


            <BodyDoctor>

            </BodyDoctor>

        <Outlet />
        </div>
    )
}

export default DoctorView;