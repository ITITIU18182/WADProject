import { Outlet, Link } from "react-router-dom";

const Services = () => {
    return (
        <div>
            {/* Services Section */}

            <section class="services" id="services">

                <h1 class="heading"> our <span>services</span> </h1>

                <div class="box-container">

                    <div class="box">
                        <i class="fas fa-notes-medical"></i>
                        <h3>free checkups</h3>
                        <p>Pain itself is love itself, adipisic To everyone.</p>
                        <Link to="/" className="btn"> learn more <span class="fas fa-chevron-right"></span> </Link>
                    </div>

                    <div class="box">
                        <i class="fas fa-ambulance"></i>
                        <h3>24/7 ambulance</h3>
                        <p>Pain itself is love itself, adipisic To everyone.</p>
                        <Link to="/" className="btn"> learn more <span class="fas fa-chevron-right"></span> </Link>
        
                    </div>

                    <div class="box">
                        <i class="fas fa-user-md"></i>
                        <h3>expert doctors</h3>
                        <p>Pain itself is love itself, adipisic To everyone.</p>
                        <Link to="/" className="btn"> learn more <span class="fas fa-chevron-right"></span> </Link>
                    </div>

                    <div class="box">
                        <i class="fas fa-pills"></i>
                        <h3>medicines</h3>
                        <p>Pain itself is love itself, adipisic To everyone.</p>
                        <Link to="/" className="btn"> learn more <span class="fas fa-chevron-right"></span> </Link>
                    </div>

                    <div class="box">
                        <i class="fas fa-procedures"></i>
                        <h3>bed facility</h3>
                        <p>Pain itself is love itself, adipisic To everyone.</p>
                        <Link to="/" className="btn"> learn more <span class="fas fa-chevron-right"></span> </Link>
                    </div>

                    <div class="box">
                        <i class="fas fa-heartbeat"></i>
                        <h3>total care</h3>
                        <p>Pain itself is love itself, adipisic To everyone.</p>
                        <Link to="/" className="btn"> learn more <span class="fas fa-chevron-right"></span> </Link>
                    </div>

                </div>

                </section>
                <Outlet />
        </div>
    )
}

export default Services;