import { Outlet, Link } from "react-router-dom";

import Management from "./Management";
import ModifyDoctor from "./ModifyDoctor";
import FeedbackView from "./FeedbackView";


const BodyAdmin = () => {
    return(
        <div>
            <Management>

            </Management>


            <ModifyDoctor>

            </ModifyDoctor>


            <FeedbackView>

            </FeedbackView>

            <Outlet />
        </div>
    )
}

export default BodyAdmin;