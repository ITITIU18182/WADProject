import { Outlet, Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const HeaderAdmin = () => {
    return (
        <div>
            <header class="header">

            {/* Logo and login */}
            {/* Logo and Login */}
            <Link to="/" class="logo"> <i class="fas fa-heartbeat"></i> medcare. </Link>
            <Link to= "/Login" id="login-button" class="button logout login w-button">Logout</Link>
            
            
            {/* Navbar */}
            <nav class="navbar">
                <HashLink smooth to="/admin#manager">Management</HashLink>
                <HashLink smooth to="/admin#doctorlist">Doctor List</HashLink>
                <HashLink smooth to="/admin#feedback">Feedback</HashLink>
            </nav>

            </header>
        <Outlet />    
        </div>
        )
}

export default HeaderAdmin;