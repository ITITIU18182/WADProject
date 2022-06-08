import { Outlet, Link } from "react-router-dom";


import HeaderAdmin from './HeaderAdmin';
import BodyAdmin from './BodyAdmin';


const AdminView = () => {
    return (
        <div>
            <HeaderAdmin>

            </HeaderAdmin>


            <BodyAdmin>

            </BodyAdmin>

        <Outlet />
        </div>
    )
}

export default AdminView;
