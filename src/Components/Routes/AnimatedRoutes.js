import { Route, Routes } from "react-router-dom";
import Outline from "../Layout/Outline";
import Home from "../../Pages/Home";
import Alumni from "../../Pages/Alumni";
import Council from "../../Pages/Council";
import Recruitment from "../../Pages/Recruitment";
import Contact from "../../Pages/Contact";
import Centennial from "../../Pages/Alumni/Centennial";
import History from "../../Pages/Alumni/History";
import Comittees from "../../Pages/Council/Comittees";
import UpdateMembers from "../../Pages/Admin/UpdateMembers";

const AnimatedRoutes = () => {
    return (
        <Outline>
            <Routes>
                <Route path='/texas-sammy' element={<Home />} />
                <Route path='/texas-sammy/alumni' element={<Alumni />} />
                    <Route path='/texas-sammy/alumni/centennial' element={<Centennial />} />
                    <Route path="/texas-sammy/alumni/history" element={<History />} />
                <Route path='/texas-sammy/contact' element={<Contact />} />
                <Route path='/texas-sammy/council' element={<Council />} />
                    <Route path='/texas-sammy/council/comittees' element={<Comittees />} />
                <Route path='/texas-sammy/recruitment' element={<Recruitment />} />
                <Route path="/texas-sammy/update-members" element={<UpdateMembers />} />
            </Routes>
        </Outline>
    );
}

export default AnimatedRoutes;