import { Outlet, Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const HeaderDoctor = () => {
    return (
        <div>
            <header class="header">

            {/* Logo and login */}
            {/* Logo and Login */}
            <Link to="/" class="logo"> <i class="fas fa-heartbeat"></i> medcare. </Link>
            <Link to= "/Login" id="login-button" class="button logout login w-button">Logout</Link>
            
            
            {/* Navbar */}
            <nav class="navbar">
                <HashLink smooth to="/doctor#bookinglist">Booking List</HashLink>
                <HashLink smooth to="/doctor#patientlist">Patient List</HashLink>
            </nav>

            </header>
        <Outlet />    
        </div>
        )
}

export default HeaderDoctor;