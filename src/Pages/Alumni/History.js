import Sidebar from "../../Components/Layout/Sidebar";
import { useContext } from "react";
import sidebarContext from "../../Components/Context/sidebar-context";
import { Navigate } from "react-router-dom";
import styles from './Css/history.module.css';

const History = () => {
    const sideCtx = useContext(sidebarContext);

    return (
        <div>
            {sideCtx.paths ? 
                <div className={styles.history}>
                    <Sidebar paths={sideCtx.paths} title={sideCtx.title} />
                    <div className={styles.content}>
                        <h1>History</h1>
                    </div>
                </div>
            :
            <Navigate to="/texas-sammy/alumni" />
            }
        </div>
    );
}

export default History