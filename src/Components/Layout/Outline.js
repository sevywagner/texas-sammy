import Header from "./Header";
import Footer from "./Footer";
import styles from './Css/outline.module.css'

const Outline = (props) => {
    return (
        <div className={styles.outline}>
            <Header />
            {props.children}
            <div className={styles.donate}>
                <a href="https://donorbox.org/texas-sammy-donation?default_interval=o">Donate</a>
            </div>
            <Footer />
        </div>
    );
}

export default Outline;