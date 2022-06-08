import { Outlet, Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';


const Management = () => {
    return (
        <div>
            <section class="manager" id="manager">
                <h1 class="heading"> Management </h1>

                <div class="box-container">
                    <div class="box">
                        <i class="fas fa-user-md"></i>
                        <h3>doctor</h3>
                        <p>Pain itself is love itself, adipisic To everyone.</p>
                        <HashLink smooth to="/admin#doctorlist" class="btn" >learn more <span class="fas fa-chevron-right"></span></HashLink>
                    </div>

                    <div class="box">
                        <i class="fas fa-ambulance"></i>
                        <h3>feedback</h3>
                        <p>Pain itself is love itself, adipisic To everyone.</p>
                        <HashLink smooth to="/admin#feedback" class="btn" >learn more <span class="fas fa-chevron-right"></span></HashLink>
                    </div>
                </div>

            </section>
        <Outlet />    
        </div>
        )
}

export default Management;
