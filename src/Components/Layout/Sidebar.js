import { NavLink } from "react-router-dom";
import styles from './Css/sidebar.module.css';
import sidebarContext from "../Context/sidebar-context";
import { useContext } from "react";

const Sidebar = (props) => {
    const sideCtx = useContext(sidebarContext)

    return (
        <div className={styles.sidebar}>
            <p className={styles.title}>{props.title}</p>
            <div className={styles.links}>
                {props.paths.map((path) => <NavLink key={Math.random()} className={styles['link-item']} to={path.url}>{path.title}</NavLink>)}
            </div>
        </div>
    );
}

export default Sidebar;