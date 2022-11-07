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
                    <NavLink key={Math.random()} className={styles['nav-item']} to='/texas-sammy/'>Home</NavLink>
                    <NavLink key={Math.random()} className={styles['nav-item']} to='/texas-sammy/alumni'>Alumni</NavLink>
                    <NavLink key={Math.random()} className={styles['nav-item']} to='/texas-sammy/council'>Council</NavLink>
                    <NavLink key={Math.random()} className={styles['nav-item']} to='/texas-sammy/contact'>Contact</NavLink>
                    <NavLink key={Math.random()} className={styles['nav-item']} to='/texas-sammy/recruitment'>Recruitment</NavLink>
                </div>
                <div className={styles.donate}>
                    <a href="https://donorbox.org/texas-sammy-donation?default_interval=o">Donate</a>
                </div>
            </nav>
        </div>
    );
}

export default Header;