import { Outlet, Link } from "react-router-dom";


import HeaderPatient from './HeaderPatient';
import BodyPatient from './BodyPatient';


const AdminPatient = () => {
    return (
        <div>
            <HeaderPatient>

            </HeaderPatient>


            <BodyPatient>

            </BodyPatient>

        <Outlet />
        </div>
    )
}

export default AdminPatient;