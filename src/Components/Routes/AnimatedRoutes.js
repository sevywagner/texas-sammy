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
                <Route path='/' element={<Home />} />
                <Route path='/alumni' element={<Alumni />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/council' element={<Council />} />
                <Route path='/recruitment' element={<Recruitment />} />
            </Routes>
        </Outline>
    );
}

export default AnimatedRoutes;