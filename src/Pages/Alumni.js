import { motion } from "framer-motion";
import { useEffect } from "react";
import Sidebar from "../Components/Layout/Sidebar";
import styles from './Css/alumni.module.css';
import { useContext } from "react";
import sidebarContext from "../Components/Context/sidebar-context";

const Alumni = () => {
    const sideCtx = useContext(sidebarContext);

    const paths = [
        {
            url: '/texas-sammy/alumni/centennial',
            title: 'Centennial'
        },
        {
            url: '/texas-sammy',
            title: 'Another Page'
        }
    ]

    useEffect(() => {
        sideCtx.setPathsHandler(paths);
        sideCtx.setTitleHandler('Alumni');
        sideCtx.setFallBackHandler('texas-sammy');
    }, [sideCtx]);

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            className={styles.alumni}
        >
            <Sidebar title="Alumni" paths={paths}/>
            <div className={styles.content}>
                <h1>Alumni</h1>
            </div>
        </motion.div>
    );
}

export default Alumni;