import Header from "./Header";
import Footer from "./Footer";
import styles from './Css/outline.module.css'

const Outline = (props) => {
    return (
        <div className={styles.outline}>
            <Header />
            {props.children}
            <Footer />
        </div>
    );
}

export default Outline;