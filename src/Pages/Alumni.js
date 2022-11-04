import { motion } from "framer-motion";

const Alumni = () => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <h1>Alumni</h1>
        </motion.div>
    );
}

export default Alumni;