import { motion } from "framer-motion";
import styles from './Css/home.module.css'

const Home = () => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <div>
                <div className={styles['back-img1']}></div>
                <div className={styles.block}>
                    <p className={styles.title}>Letter</p>
                    <p className={styles['home-pg']}>
                        To the Brothers, Parents, Alumni, and Rushees of Texas Sammy: While much of society looks 
                        down on Fraternity Life, let me be the first to say that I have known no truer brotherhood 
                        than the Sigma Theta Chapter of Sigma Alpha Mu. For 100 years and counting, our chapter 
                        inspires and cultivates brotherhood, leadership, education, and integrity in all its members. 
                        Our fraternity has shaped life-long friendships, meanwhile teaching the skills necessary for 
                        life beyond the collegiate experience. I am proud to lead a group of such passionate and 
                        capable young men. I am confident in the future success of our members, and I count myself 
                        lucky to have known each and every one. I look forward to upholding the values and reputation 
                        of this fraternity that has given me so much; I only hope that our brothers, alumni, parents, 
                        and prospective new members can share in my experience. 
                    </p>
                </div>
                <div className={styles['back-img2']}></div>
                <div className={styles.block}>
                    <p className={styles.title}>About the Sigma Theta Chapter</p>
                    <p className={styles['home-pg']}>
                    The Sigma Theta chapter of Sigma Alpha Mu (also known as Sammy) is a fraternity at the 
                    University of Texas at Austin founded on October 22, 1922. Sammy has since established 
                    itself as a strong member of the University of Texas Community and Interfraternity Council
                     (IFC). As we approach our hundredth anniversary, Sammy is preparing to have its most 
                     successful year on record and pay respect to the venerable history of our past. 
                     The Sammy House is located at 2501 Leon Street in the West Campus neighborhood
                      of Austin, Texas, close to the UT campus. We have been located on Leon Street
                       since 1963, and continue to create lifelong bonds on these historical grounds. 
                       The fraternity house was formerly located on 1919 Robbins Place, also in the West 
                       Campus area. Both locations have been home to unforgettable memories, lifelong 
                       friendships, and rich history. We continue to honor that legacy by preserving the 
                       past as best as possible. Sigma Alpha Mu holds great respect for those who came before
                        us, and continues to look up to these wise figures. We enshrine the legacy of Leon 
                        &quot;Daddy&quot; Washington, our former chef, porter, and house dad. Daddy is a key reason 
                        for the success of Texas Sammy, and we honor his legacy every day on house grounds. 
                        Daddy&rsquo;s influence is visible throughout the fraternity, and we are proud to carry 
                        down benefits to the members of his family as gratitude for his service. For the 
                        last 24 years and counting, our chef Larry &quot;Mayne&quot; Harris has acted as the big
                        brother of the house. Larry gives invaluable advice to everyone he speaks to, and 
                        strives to keep our brotherhood, house, and fraternity up to  the high standards 
                        Leon Washington established. For 100 years, Sammy has been at the heart of 
                        brotherhood at the University of Texas. Our countless successful alumni exemplify 
                        the standards of manhood, democracy, and humanity fostered at the Sigma Theta 
                        chapter of Sigma Alpha Mu.
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

export default Home;