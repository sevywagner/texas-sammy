import { NavLink } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import styles from './Css/header.module.css'
import { useState } from "react";

const MobileHeader = () => {
    const [showNav, setShowNav] = useState(false);

    return (
        <div className={styles['mobile-header']}>
            <NavLink to='/texas-sammy'>
                <div className={styles.logo}></div>
            </NavLink>
            

            <div>
                <nav>
                    <div className={styles.routes}>
                        <div>
                            <NavLink key={Math.random()} className={styles['nav-item']} to='/texas-sammy/'>Home</NavLink>
                        </div>
                        <div>
                            <NavLink key={Math.random()} className={styles['nav-item']} to='/texas-sammy/alumni'>Alumni</NavLink>
                        </div>
                        <div>
                            <NavLink key={Math.random()} className={styles['nav-item']} to='/texas-sammy/council'>Council</NavLink>
                        </div>
                        <div>
                            <NavLink key={Math.random()} className={styles['nav-item']} to='/texas-sammy/contact'>Contact</NavLink>
                        </div>
                        <div>
                            <NavLink key={Math.random()} className={styles['nav-item']} to='/texas-sammy/recruitment'>Recruitment</NavLink>
                        </div>
                    </div>
                </nav>
            </div>

        </div>
    );
}

const Header = () => {
    return (
        <div>
            <MobileHeader />
            <div className={styles.header}>
                <NavLink to='/texas-sammy'>
                    <div className={styles.logo}></div>
                </NavLink>
                <nav>
                    <div className={styles['small-logo']}></div>
                    <div className={styles.routes}>
                        <div>
                            <NavLink key={Math.random()} className={styles['nav-item']} to='/texas-sammy/'>Home</NavLink>
                        </div>

                        <div className={styles.subnav}>
                            <NavLink key={Math.random()} className={styles['nav-item']} to='/texas-sammy/alumni'>Alumni</NavLink>
                            <div className={styles['subnav-content']}>
                                <NavLink className={styles['subnav-item']} to='/texas-sammy/alumni/history'>History</NavLink>
                            </div>
                        </div>

                        <div className={styles.subnav}>
                            <NavLink key={Math.random()} className={styles['nav-item']} to='/texas-sammy/council'>Council</NavLink>
                            <div className={styles['subnav-content']}>
                                <NavLink className={styles['subnav-item']} to='/texas-sammy/council/comittees'>Committees</NavLink>
                            </div>
                        </div> 

                        <div>
                            <NavLink key={Math.random()} className={styles['nav-item']} to='/texas-sammy/contact'>Contact</NavLink>
                        </div>

                        <div>
                            <NavLink key={Math.random()} className={styles['nav-item']} to='/texas-sammy/recruitment'>Recruitment</NavLink>
                        </div>
                        
                    </div>
                    <div className={styles.donate}>
                        <a href="https://donorbox.org/texas-sammy-donation?default_interval=o">Donate</a>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Header;