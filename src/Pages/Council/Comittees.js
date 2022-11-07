import { useContext } from "react";
import sidebarContext from "../../Components/Context/sidebar-context";
import Sidebar from "../../Components/Layout/Sidebar";
import styles from './comittees.module.css';
import { Navigate } from "react-router-dom";
import { motion } from "framer-motion";

const Comittees = () => {
    const sideCtx = useContext(sidebarContext);

    return (
        <motion.div
            initial={{transform: "translateY(-100vh)"}}
            animate={{transform: "translateY(0vh)"}}
            exit={{transform: "translateY(100vh)"}}
        >
            {sideCtx.paths ? 
            <div className={styles.comittees}>
                <Sidebar title='Council' paths={sideCtx.paths} />
                <div className={styles.content}>
                    <h1>Comittees</h1>
                </div>
            </div>
            :
            <Navigate to='/texas-sammy/council' />
            }
            
        </motion.div>
    );
}

export default Comittees;