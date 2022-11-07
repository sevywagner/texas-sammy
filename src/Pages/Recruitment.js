import { motion } from "framer-motion";

const Recruitment = () => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <h1>Recruitment</h1>
        </motion.div>
    );
}

export default Recruitment;