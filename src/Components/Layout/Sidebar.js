import { NavLink } from "react-router-dom";
import styles from './Css/sidebar.module.css';

const Sidebar = (props) => {
    return (
        <div className={styles.sidebar}>
            <p className={styles.title}>{props.title}</p>
            <div className={styles.links}>
                {props.paths.map((path) => <NavLink className={styles['link-item']} to={path.url}>{path.title}</NavLink>)}
            </div>
        </div>
    );
}

export default Sidebar;