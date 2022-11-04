import { Route, Routes } from "react-router-dom";
import Outline from "../Layout/Outline";
import Home from "../../Pages/Home";
import Alumni from "../../Pages/Alumni";
import Council from "../../Pages/Council";
import Recruitment from "../../Pages/Recruitment";
import Contact from "../../Pages/Contact";

const AnimatedRoutes = () => {
    return (
        <Outline>
            <Routes>
                <Route path='/texas-sammy' element={<Home />} />
                <Route path='/texas-sammy/alumni' element={<Alumni />} />
                <Route path='/texas-sammy/contact' element={<Contact />} />
                <Route path='/texas-sammy/council' element={<Council />} />
                <Route path='/texas-sammy/recruitment' element={<Recruitment />} />
            </Routes>
        </Outline>
    );
}

export default AnimatedRoutes;