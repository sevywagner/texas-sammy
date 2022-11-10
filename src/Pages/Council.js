import { motion } from "framer-motion";
import { useEffect } from "react";
import Sidebar from "../Components/Layout/Sidebar";
import styles from './Css/council.module.css';
import { useContext } from "react";
import sidebarContext from "../Components/Context/sidebar-context";
import Member from "../Components/Council/Member";
import phil from './../Pictures/CouncilPhotos/Phil_Tellez.jpg'
import joe from './../Pictures/CouncilPhotos/Joe_Weiner.jpg'
import aidan from './../Pictures/CouncilPhotos/Aidan_Cogan.jpg'

const Council = () => {
    const sideCtx = useContext(sidebarContext);

    const paths = [
        {
            url: '/texas-sammy/council',
            title: '2022-2023'
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
            picUrl: 'Jacob_Rose'
        },
        {
            name: 'Sachio Goodie',
            number: '(706) - 296 - 0567',
            year: '(PC, \'20)',
            title: 'Vice Prior',
            picUrl: 'Sachio_Goodie'
        },
        {
            name: 'Alex Natelson',
            number: '(832) - 249 - 0084',
            year: '(PC, \'20)',
            title: 'Exchequer',
            picUrl: 'Alex_Natelson'
        },
        {
            name: 'Richard Yang',
            number: '(214) - 208 - 8600',
            year: '(PC, \'21)',
            title: 'Financial Secretary',
            picUrl: 'Richard_Yang'
        },
        {
            name: 'Alex Suster',
            year: '(PC, \'21)',
            title: 'Risk Manager',
            picUrl: 'Alex_Suster'
        },
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
                    <div className={styles['wrapper']}>
                        <div className={styles.info}>
                            <p className={styles.title}>Socials</p>
                            <p>Phillip Tellez (PC, '20)</p>
                            <p>Joe Weiner (PC, '21)</p>
                            <p>Aidan Cogan (PC, '21)</p>
                        </div>
                        <div className={styles.pic}>
                            <img height='150' src={phil} />
                            <img height='150' src={joe} />
                            <img height='150' src={aidan} />
                        </div>
                    </div>
                </div>
                <div className={styles.fill}></div>
            </div>
        </motion.div>
    );
}

export default Council;