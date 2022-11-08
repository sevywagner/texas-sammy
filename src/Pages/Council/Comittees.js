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
                <div className={styles.side}>
                    <Sidebar title='Council' paths={sideCtx.paths} />
                </div>
                <div className={styles.content}>
                    <h1>Comittees</h1>
                    <div className={styles.info}>
                        <div>
                            <p className={styles['section-title']}>Rush Team</p>
                            <p className={styles.subtitle}>Chair: </p>
                            <p>Ben Gordon (PC '20)</p>
                            <p className={styles.subtitle}>Captains: </p>
                            <p>Aidan Cogan (PC '21)</p>
                            <p>Max Stein (PC '21)</p>
                            <p>Joe Weiner (PC '21)</p>
                        </div>
                        <div>
                            <p className={styles['section-title']}>Alumni</p>
                            <p className={styles.subtitle}>Chairs: </p>
                            <p>Max Stein (PC '21)</p>
                            <p>Adam Lowey (PC '21)</p>
                            <p>Brandon Weinberg (PC '20)</p>
                        </div>
                    </div>
                </div>
                <div className={styles.fill}></div>
            </div>
            :
            <Navigate to='/texas-sammy/council' />
            }
            
        </motion.div>
    );
}

export default Comittees;