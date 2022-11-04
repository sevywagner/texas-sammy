import { NavLink } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import styles from './Css/header.module.css'

const Header = () => {
    return (
        <div>
            <div className={styles.logo}></div>
            <nav>
                <div className={styles['small-logo']}></div>
                <div className={styles.routes}>
                    <AnimatePresence>
                        <NavLink className={styles['nav-item']} to='/'>Home</NavLink>
                        <NavLink className={styles['nav-item']} to='/alumni'>Alumni</NavLink>
                        <NavLink className={styles['nav-item']} to='/council'>Council</NavLink>
                        <NavLink className={styles['nav-item']} to='/contact'>Contact</NavLink>
                        <NavLink className={styles['nav-item']} to='/recruitment'>Recruitment</NavLink>
                    </AnimatePresence>
                </div>
                <div className={styles.donate}>
                    <a href="https://donorbox.org/texas-sammy-donation?default_interval=o">Donate</a>
                </div>
            </nav>
        </div>
    );
}

export default Header;