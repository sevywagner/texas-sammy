import { motion } from "framer-motion";
import { useEffect } from "react";
import Sidebar from "../Components/Layout/Sidebar";
import styles from './Css/council.module.css';
import { useContext } from "react";
import sidebarContext from "../Components/Context/sidebar-context";
import Member from "../Components/Council/Member";

const Council = () => {
    const sideCtx = useContext(sidebarContext);

    const paths = [
        {
            url: '/texas-sammy/council',
            title: 'Council'
        },
        {
            url: '/texas-sammy/council/comittees',
            title: 'Comittees'
        }
    ];

    const members = [
        {
            name: 'Jacob Rose',
            number: '(914) - 514 - 5477',
            year: '(PC, \'19)',
            title: 'Prior',
            picUrl: 'Aidan_Cogan'
        },
        {
            name: 'Sachio Goodie',
            number: '(706) - 296 - 0567',
            year: '(PC, \'20)',
            title: 'Vice Prior',
            picUrl: 'Alex_Natelson'
        }
    ]

    useEffect(() => {
        sideCtx.setPathsHandler(paths);
    }, []);

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <div className={styles.council}>
                <div className={styles.side}>
                    <Sidebar title='Council' paths={paths} />
                </div>
                <div className={styles.content}>
                    {members.map((member => <Member key={Math.random()} member={member} />))}
                </div>
                <div className={styles.fill}></div>
            </div>
        </motion.div>
    );
}

export default Council;