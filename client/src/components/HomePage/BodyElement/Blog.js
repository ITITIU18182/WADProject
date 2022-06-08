import { Outlet, Link } from "react-router-dom";

import BlogImg1 from "../../../images/blog-1.jpg";
import BlogImg2 from "../../../images/blog-2.jpg";
import BlogImg3 from "../../../images/blog-3.jpg";


const Blog = () => {
    return(
        <div>
            <section class="blogs" id="blogs">

            <h1 class="heading"> our <span>blogs</span> </h1>

            <div class="box-container">

                <div class="box">
                    <div class="image">
                        <img src={BlogImg1} alt=""/>
                    </div>

                    <div class="content">
                        <div class="icon">
                            <Link to="/" className="fas fa-calendar"> 1st may, 2021 </Link>
                            <Link to="/" className="fas fa-user"> by admin </Link>
                        </div>
                        <h3>blog title goes here</h3>
                        <p>Please note that this is an advanced advertising search competition. They take care of you.</p>
                        <Link to="/" className="btn"> learn more <span class="fas fa-chevron-right"></span> </Link>
                    </div>
                </div>

                <div class="box">
                    <div class="image">
                        <img src={BlogImg2} alt=""/>
                    </div>
                    <div class="content">
                        <div class="icon">
                        <Link to="/" className="fas fa-calendar"> 1st may, 2021 </Link>
                        <Link to="/" className="fas fa-user"> by admin </Link>
                        </div>
                        <h3>blog title goes here</h3>
                        <p>Please note that this is an advanced advertising search competition. They take care of you.</p>
                        <Link to="/" className="btn"> learn more <span class="fas fa-chevron-right"></span> </Link>
                    </div>
                </div>

                <div class="box">
                    <div class="image">
                        <img src={BlogImg3} alt=""/>
                    </div>
                    <div class="content">
                        <div class="icon">
                            <Link to="/" className="fas fa-calendar"> 1st may, 2021 </Link>
                            <Link to="/" className="fas fa-user"> by admin </Link>
                        </div>
                        <h3>blog title goes here</h3>
                        <p>Please note that this is an advanced advertising search competition. They take care of you.</p>
                        <Link to="/" className="btn"> learn more <span class="fas fa-chevron-right"></span> </Link>
                    </div>
                </div>

            </div>
            </section>
        <Outlet />
        </div>
    )
}

export default Blog;
