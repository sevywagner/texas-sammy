import { motion } from "framer-motion";
import styles from './Css/recruitment.module.css'

const Recruitment = () => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <h1>Recruitment</h1>
            <iframe
                src="https://www.youtube.com/embed/IzsNBPnhcLo" 
                title="YouTube video player"
                frameBorder='0'
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen 
            />

            <p className={styles.pg}>
                Prospective Parents and Rushees, 
                <br />
                <br />
                &emsp;&emsp;The Texas Sigma Alpha Mu Rush Team is excited for the potential of welcoming you or your son into our Fraternity. Since our initial founding in 1922, Texas Sammy has remained a premier Greek organization within The University of Texas&rsquo;s campus. 
                <br /><br />
                &emsp;&emsp;The Fraternity places emphasis on brotherhood, academic performance, and personal development. Our academic standing ranks amongst the top each year and our social events allow our 150 active members to interact with a large and diverse group within the UT community. 
                <br /><br />
                &emsp;&emsp;As Texas Sammy enters our 100th year, we look forward to continuing our long-lasting traditions such as our annual Atlantic City party, monthly alumni luncheons, and philanthropic Halloween event.
                <br /><br />
                &emsp;&emsp;Please feel free to reach out to Info@texassammy.org with any questions about The University or the Fraternity.
                <br />
                <br /><br />
                Hook &rsquo;em,
                <br />
                Ben Gordan, Recruitment Chair, PC &rsquo;20
            </p>
            
            <div className={styles['form-wrap']}>
                <form>
                    <label>Name</label>
                    <input type='text' />
                    <label>Phone Number</label>
                    <input type='text' />
                    <label>Email</label>
                    <input type='text' />
                </form>
            </div>
            
        </motion.div>
    );
}

export default Recruitment;