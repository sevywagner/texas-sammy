import { useContext } from "react";
import sidebarContext from "../../Components/Context/sidebar-context";
import Sidebar from "../../Components/Layout/Sidebar";
import { Navigate } from "react-router-dom";

const Centennial = () => {
    const sideCtx = useContext(sidebarContext);

    return (
        <div>
            {sideCtx.paths ? 
            <div>
                <h1>Centennial</h1>
                <Sidebar title={sideCtx.title} paths={sideCtx.paths} />
            </div>
            :
            <Navigate to='/texas-sammy/alumni' />}
            
        </div>
    );
}

export default Centennial;