import { useContext, useEffect, useState } from "react";
import sidebarContext from "../../Components/Context/sidebar-context";
import Sidebar from "../../Components/Layout/Sidebar";
import styles from './comittees.module.css';
import { Navigate } from "react-router-dom";
import { motion } from "framer-motion";

const Comittees = () => {
    const [alumni, setAlumni] = useState();
    const [rChair, setRChair] = useState();
    const [rCap, setRCap] = useState();
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

        if (!alumni) {
            fetch('http://localhost:8080/get-members', {
                method: 'POST',
                body: JSON.stringify({ type: 'Committees' }),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then((response) => response.json()).then((data) => {
                let al = [];
                let rCh = [];
                let rCa = [];
                for (let i = 0; i < data.members.length; i++) {
    
                    if (data.members[i].committee === 'A') {
                        al.push(data.members[i])
                    } else if (data.members[i].committee === 'R' && data.members[i].position === 'Chair') {
                        rCh.push(data.members[i]);
                    } else {
                        rCa.push(data.members[i]);
                    }
                }

                setAlumni(al);
                setRChair(rCh);
                setRCap(rCa);
            }).catch((err) => {
                console.log(err);
            })
        }
    }, []);


    return (
        <motion.div
            initial={{transform: "translateY(-100vh)"}}
            animate={{transform: "translateY(0vh)"}}
            exit={{transform: "translateY(100vh)"}}
        >
            <div className={styles.comittees}>
                <div className={styles.side}>
                    {sideCtx.paths && <Sidebar title='Council' paths={sideCtx.paths} />}
                </div>
                <div className={styles.content}>
                    <p className={styles.title}>Committees</p>
                    <div className={styles.wrap}>
                        <div className={styles.info}>
                            <div className={styles.block}>
                                <p className={styles['section-title']}>Rush Team</p>
                                <p className={styles.subtitle}>Chair: </p>
                                {rChair && rChair.map((m) => <p key={m.name}>{m.name} (PC, '{m.year})</p>)}
                                <p className={styles.subtitle}>Captains: </p>
                                {rCap && rCap.map((m) => <p key={m.name}>{m.name} (PC, '{m.year})</p>)}
                            </div>
                            <div className={styles.block}>
                                <p className={styles['section-title']}>Alumni</p>
                                <p className={styles.subtitle}>Chairs: </p>
                                {alumni && alumni.map((m) => <p key={m.name}>{m.name} (PC, '{m.year})</p>)}
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className={styles.fill}></div>
            </div>
        </motion.div>
    );
}

export default Comittees;