import styles from './Css/footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.pics}>
                <a href='instagram.com'>
                    <div className={styles.insta}></div>
                </a>
                <div>
                    <div className={styles.shield}></div>
                </div>
                <a href='facebook.html'>
                    <div className={styles.facebook}></div>
                </a>
            </div>
            <div className={styles.copyright}>
                <p>
                    &copy;1922-2022 Texas Sammy &#8212; 2501 Leon St, Austin TX, 78705 &#8212; Privacy Policy
                </p>
            </div>
        </div>
    );
}

export default Footer;