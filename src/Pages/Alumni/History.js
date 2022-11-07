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
                    <div className={styles.side}>
                        <Sidebar paths={sideCtx.paths} title={sideCtx.title} />
                    </div>
                    <div className={styles.content}>
                        <h1>History</h1>
                        <p className={styles.pg}>
                            Tradition and reverence for the past are two important pillars that have driven Texas Sammy for almost 100 years. From 40 of our annual Atlantic City build party to the eternal legend of Leon "Daddy" Washington and his successor Larry "Mayne" Harris, combining for over 75 years of service, our chapter is intrinsically connected to the past. It is a relief to many alumni that the house "hasn’t aged a day," and the brotherhood is just as strong as when they were active members. At Texas Sammy, we not only honor those who came before us but we also use their wisdom as guidance for the present. Texas Sammy boasts one of the largest alumni networks out of the entire national organization, with over 1,500 initiates. With past members in all corners of the country, our chapter has an extensive web of both business and social connections. Even when pledge brothers move away and grow apart, Texas Sammy remains a beloved bridge between old friends. Many alumni have remained heavily involved with the chapter, such as our advisor Randy Maltz, financial advisor Bruce Golden, and former housing corp chair Brad Greenblum. We are forever thankful for their volunteered advice and efforts to keep the chapter in excellent shape. With the centennial anniversary of our chapter in sight, these men, and many others, have helped to reengage the alumni base with the current chapter. We hosted monthly Austin-area alumni luncheons at the house featuring Daddy’s famous "chicken finger Friday" tradition. Alumni from dozens of different pledge classes reunited with each other and met active members of the chapter. Showing "mutual moral aid and support", the chapter sent out two clean up crews to help an Austin alumni when a tornado destroyed his house. We recognize and appreciate everything the alumni have done for us over the years and want to continue giving back to the men who came before us. We are looking forward to our centennial celebration on November 4-6, 2022, in Austin, Texas. This monumental event will honor 100 years of Texas Sammy and be our largest reunion in years. Please click on the centennial tab to learn more about the weekend, we would love for everyone to attend. Do not hesitate to reach out to the alumni chairs, Adam Lowey, Max Stein, and Brandon Weinberg at centennial@texassammy.org with questions regarding alumni relations, the centennial weekend, or anything else.
                        </p>
                    </div>
                    <div className={styles.fill}></div>
                </div>
            :
            <Navigate to="/texas-sammy/alumni" />
            }
        </motion.div>
    );
}

export default History