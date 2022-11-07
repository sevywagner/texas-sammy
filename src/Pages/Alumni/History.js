import Sidebar from "../../Components/Layout/Sidebar";
import { useContext } from "react";
import sidebarContext from "../../Components/Context/sidebar-context";
import { Navigate } from "react-router-dom";
import styles from './Css/history.module.css';
import { motion } from "framer-motion";

const History = () => {
    const sideCtx = useContext(sidebarContext);

    return (
        <motion.div
            initial={{transform: "translateY(-100vh)"}}
            animate={{transform: "translateY(0vh)"}}
            exit={{transform: "translateY(100vh)"}}
        >
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
        </motion.div>
    );
}

export default History