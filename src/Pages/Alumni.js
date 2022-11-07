import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Sidebar from "../Components/Layout/Sidebar";
import styles from './Css/alumni.module.css';
import { useContext } from "react";
import sidebarContext from "../Components/Context/sidebar-context";
import picture from './../Pictures/Composite (Carousel) Photos/Comp1.jpg';

const Alumni = () => {
    const sideCtx = useContext(sidebarContext);
    const [picUrl, setPicUrl] = useState();
    const [counter, setCounter] = useState(1);

    const paths = [
        {
            url: '/texas-sammy/alumni',
            title: 'Composites'
        },
        {
            url: '/texas-sammy/alumni/centennial',
            title: 'Centennial'
        },
        {
            url: '/texas-sammy/alumni/history',
            title: 'History'
        }
    ]


    useEffect(() => {
        sideCtx.setPathsHandler(paths);
        sideCtx.setTitleHandler('Alumni');
        sideCtx.setFallBackHandler('texas-sammy');

        setPicUrl(picture);
    }, []);

    const nextHandler = () => {
        if (counter === 42) {
            const pic1 = require('./../Pictures/Composite (Carousel) Photos/Comp1.jpg');
            setPicUrl(pic1);
            setCounter(1);
            return;
        }

        setCounter((prevState) => prevState + 1);
        const pic = require(`./../Pictures/Composite (Carousel) Photos/Comp${counter + 1}.jpg`);
        setPicUrl(pic);
    }

    const prevHandler = () => {
        if (counter == 1) {
            const pic = require('./../Pictures/Composite (Carousel) Photos/Comp42.jpg');
            setPicUrl(pic);
            setCounter(42);
            return;
        }

        setCounter((prevState) => prevState - 1);
        const pic = require(`./../Pictures/Composite (Carousel) Photos/Comp${counter - 1}.jpg`);
        setPicUrl(pic);
    }


    console.log(counter);
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            className={styles.alumni}
        >
            <div className={styles.side}>
                <Sidebar title="Alumni" paths={paths}/>
            </div>
            <div className={styles.content}>
                <h1>Alumni</h1>
                <div className={styles.composites}>
                    <button onClick={prevHandler} className={styles['composite-nav']}>{`<`}</button>
                    <img src={picUrl} />
                    <button onClick={nextHandler} className={styles['composite-nav']}>{`>`}</button>
                </div>
            </div>
            <div className={styles.fill}></div>
        </motion.div>
    );
}

export default Alumni;