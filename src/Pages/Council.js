import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Sidebar from "../Components/Layout/Sidebar";
import styles from './Css/council.module.css';
import { useContext } from "react";
import sidebarContext from "../Components/Context/sidebar-context";
import Member from "../Components/Council/Member";
import phil from './../Pictures/CouncilPhotos/Phil_Tellez.jpg'
import joe from './../Pictures/CouncilPhotos/Joe_Weiner.jpg'
import aidan from './../Pictures/CouncilPhotos/Aidan_Cogan.jpg'

const Council = () => {
    const [members, setMembers] = useState();
    const sideCtx = useContext(sidebarContext);

    const paths = [
        {
            url: '/texas-sammy/council',
            title: '2022-2023'
        },
        {
            url: '/texas-sammy/council/comittees',
            title: 'Committees'
        }
    ];

    useEffect(() => {
        sideCtx.setPathsHandler(paths);

        fetch('https://texas-sammy-backend.onrender.com/get-members', {
            method: 'POST',
            body: JSON.stringify({ type: 'Council' }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => response.json()).then((data) => {
            for (let i = 0; i < data.members.length; i++) {
                data.members[i].image = data.files[i];
            }
            setMembers(data.members)
        }).catch((err) => {
            console.log(err);
        })

    }, []);

    let year = new Date().getFullYear();
    year = new Date().getMonth() > 6 ? `${year}-${year + 1}` : `${year - 1}-${year}`;

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
                    <p className={styles['page-title']}>{year} Council</p>
                    {!members && <p>Loading...</p>}
                    <div className={styles.wrap}>
                        {members && members.map((member => <Member key={Math.random()} member={member} />))}
                    </div>
                </div>
                <div className={styles.fill}></div>
            </div>
        </motion.div>
    );
}

export default Council;