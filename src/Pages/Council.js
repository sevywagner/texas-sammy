import { motion } from "framer-motion";

const Council = () => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <h1>Council</h1>
        </motion.div>
    );
}

export default Council;