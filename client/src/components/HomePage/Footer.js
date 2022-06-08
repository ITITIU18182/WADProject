import { Outlet, Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            {/* Footer Section */}
            <section class="footer">

                <div class="box-container">

                <div class="box">
                    <h3>quick links</h3>
                    <Link to="/" className="fas fa-chevron-right"> home </Link>
                    <Link to="/" className="fas fa-chevron-right"> services </Link>
                    <Link to="/" className="fas fa-chevron-right"> about </Link>
                    <Link to="/" className="fas fa-chevron-right"> doctors </Link>
                    <Link to="/" className="fas fa-chevron-right"> book </Link>
                    <Link to="/" className="fas fa-chevron-right"> review </Link>
                    <Link to="/" className="fas fa-chevron-right"> blogs </Link>
                </div>

                <div class="box">
                    <h3>our services</h3>
                    <Link to="/" className="fas fa-chevron-right"> dental care </Link>
                    <Link to="/" className="fas fa-chevron-right"> message therapy </Link>
                    <Link to="/" className="fas fa-chevron-right"> cardioloty </Link>
                    <Link to="/" className="fas fa-chevron-right"> diagnosis </Link>
                    <Link to="/" className="fas fa-chevron-right"> ambulance service </Link>

                </div>

                <div class="box">
                    <h3>contact info</h3>
                    <Link to="/" className="fas fa-phone"> +123-456-7890 </Link>
                    <Link to="/" className="fas fa-phone"> +111-222-3333 </Link>
                    <Link to="/" className="fas fa-envelope"> shaikhanas@gmail.com </Link>
                    <Link to="/" className="fas fa-envelope"> anasbhai@gmail.com </Link>
                    <Link to="/" className="fas fa-map-marker-alt"> mumbai, india - 400104 </Link>
                </div>

                <div class="box">
                    <h3>follow us</h3>
                    <Link to="/" className="fab fa-facebook-f"> facebook </Link>
                    <Link to="/" className="fab fa-twitter"> twitter </Link>
                    <Link to="/" className="fab fa-instagram"> instagram </Link>
                    <Link to="/" className="fab fa-linkedin"> linkedin </Link>
                    <Link to="/" className="fab fa-pinterest"> pinterest </Link>
                </div>

            </div>

            <div class="credit"> created by <span>mr. MinhKhang</span> | all rights reserved </div>

            </section>
            <Outlet />
        </div>
    );
}        

export default Footer;