import { Outlet, Link } from "react-router-dom";

import HomeImage from "../../images/home-img.svg";

import Services from "./Body Element/Services";
import About from "./Body Element/About";
import Doctor from "./Body Element/Doctor";
import Review from "./Body Element/Review";
import Blog from "./Body Element/Blog";
import BookingForm from "./Body Element/BookingForm";

const Body = () => {
  return (
    <div>
        {/* Home Section */}

        <section class="home" id="home">

            <div class="image">
                <img src={ HomeImage } alt="home-img"/>
            </div>

            <div class="content">
                <h3>stay safe, stay healthy</h3>
                <p>Please note that this is a pain reliever. However, is the problem true? Great, hard work!</p>
                <Link to="/" className="btn">contact us <span class="fas fa-chevron-right"></span> </Link>
        </div>

        </section>

         {/* Icons Section */}

        <section class="icons-container">

            <div class="icons">
                <i class="fas fa-user-md"></i>
                <h3>140+</h3>
                <p>doctors at work</p>
            </div>

            <div class="icons">
                <i class="fas fa-users"></i>
                <h3>1040+</h3>
                <p>satisfied patients</p>
            </div>

            <div class="icons">
                <i class="fas fa-procedures"></i>
                <h3>500+</h3>
                <p>bed facility</p>
            </div>

            <div class="icons">
                <i class="fas fa-hospital"></i>
                <h3>80+</h3>
                <p>available hospitals</p>
            </div>

        </section>

        {/* Services Section */}

        <Services>

        </Services>

        {/* About Section */}

        <About>

        </About>

        {/* Doctors Section */}

        <Doctor>

        </Doctor>

        {/* Booking Section */}
        <BookingForm>

        </BookingForm>
        
        {/* Review Section */}

        <Review>

        </Review>

        {/* Blogs Section */}

        <Blog>

        </Blog>
    

      <Outlet />
    </div>
  )
};

export default Body;