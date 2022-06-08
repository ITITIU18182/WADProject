import { Outlet, Link } from "react-router-dom";

import Header from "./Header";
import Body from "./Body";
import Footer from "../../components/HomePage/Footer";

const HomePage = () => {
    return(
        <div>
            <Header>

            </Header>


            <Body>

            </Body>


            <Footer>

            </Footer>

        <Outlet />
        </div>
    );
}

export default HomePage;