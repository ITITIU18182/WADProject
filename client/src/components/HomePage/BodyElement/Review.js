import { Outlet, Link } from "react-router-dom";

import ClientImg1 from "../../../images/pic-1.png";
import ClientImg2 from "../../../images/pic-2.png";
import ClientImg3 from "../../../images/pic-3.png";

const Review = () => {
    return (
        <div>
            <section class="review" id="review">
    
    <h1 class="heading"> client's <span>review</span> </h1>

    <div class="box-container">

        <div class="box">
            <img src={ClientImg1} alt=""/>
            <h3>john deo</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
            </div>
            <p class="text">Please note that this is a pain reliever. The Hardcore Wise Man, Can I Open Anything? Push back to follow Unless we encounter something Freedom we never know Other wiser Less joy, reject pain Follow the cable!</p>
        </div>

        <div class="box">
        <img src={ClientImg2} alt=""/>
            <h3>john deo</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
            </div>
            <p class="text">Please note that this is a pain reliever. The Hardcore Wise Man, Can I Open Anything? Push back to follow Unless we encounter something Freedom we never know Other wiser Less joy, reject pain Follow the cable!</p>
        </div>

        <div class="box">
        <img src={ClientImg3} alt=""/>
            <h3>john deo</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
            </div>
            <p class="text">Please note that this is a pain reliever. The Hardcore Wise Man, Can I Open Anything? Push back to follow Unless we encounter something Freedom we never know Other wiser Less joy, reject pain Follow the cable!</p>
        </div>

    </div>
</section>
                <Outlet />
        </div>
    )
}

export default Review;