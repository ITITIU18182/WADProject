import { Outlet, Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';


const Header = () => {
  return (
    <div>
        <header class="header">

            {/* Logo and Login */}
            <Link to="/" class="logo"> <i class="fas fa-heartbeat"></i> medcare. </Link>
            <Link to= "/Login" id="login-button" class="button logout login w-button">Login</Link>

            {/* Navbar */}
            <nav class="navbar">
                <HashLink smooth to="/#">Home</HashLink>
                <HashLink smooth to="/#services">Services</HashLink>
                <HashLink smooth to="/#about">About</HashLink>
                <HashLink smooth to="/#doctors">Doctor</HashLink>
                <HashLink smooth to="/#review">Review</HashLink>
                <HashLink smooth to="/#blogs">Blogs</HashLink>
                <HashLink smooth to="/#booking">Booking</HashLink>
            </nav>


        </header>
    

      <Outlet />
    </div>
  )
};

export default Header;