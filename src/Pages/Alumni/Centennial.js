import { useContext } from "react";
import sidebarContext from "../../Components/Context/sidebar-context";
import Sidebar from "../../Components/Layout/Sidebar";
import { Navigate } from "react-router-dom";
import styles from './Css/centennial.module.css'

const Centennial = () => {
    const sideCtx = useContext(sidebarContext);

    return (
        <div>
            {sideCtx.paths ? 
            <div className={styles.centennial}>
                <div>
                    <Sidebar title={sideCtx.title} paths={sideCtx.paths} />
                </div>
                
                <div className={styles.content}>
                    <h1>Centennial</h1>
                </div>
            </div>
            :
            <Navigate to='/texas-sammy/alumni' />}
            
        </div>
    );
}

export default Centennial;