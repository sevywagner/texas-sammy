import { motion } from "framer-motion";
import { useRef, useState } from "react";
import useInput from "../Hooks/use-input";
import styles from './Css/contact.module.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [error, setError] = useState(false);
    const [sent, setSent] = useState(false);
    const [sendError, setSendError] = useState(false);

    const {
        value: name, 
        isValid: nameIsValid, 
        hasError: nameHasError, 
        valueChangedHandler: nameChangeHandler, 
        inputBlurHandler: nameBlurHandler, 
        reset: resetName
    } = useInput((data) => data.trim() !== '');

    const {
        value: email,
        isValid: emailIsValid,
        hasError: emailHasError,
        valueChangedHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmail
    } = useInput((data) => data.includes('@'));

    const {
        value: message,
        isValid: messageIsValid,
        hasError: messageHasError,
        valueChangedHandler: messageChangeHandler,
        inputBlurHandler: messageBlurHandler,
        reset: resetMessage
    } = useInput((data) => data.trim() !== '');

    const formSubmitHandler = (event) => {
        event.preventDefault();

        if (!nameIsValid || !emailIsValid || !messageIsValid) {
            setError(true);
            return;
        }

        emailjs.sendForm('service_819shjh', 'template_71ea9of', formRef.current, 'sZsdUfD-r40m-DntK')
        .then((result) => {
            console.log(result);
            setSent(true);
            setError(false);
            setSendError(false);


            resetName();
            resetEmail();
            resetMessage();
        }, (error) => {
            console.log(error);
            setSendError(true);
            setSent(false);
        });
    }


    let inputClasses = nameHasError ? 'invalid' : '';
    let emailClasses = emailHasError ? 'invalid' : '';
    let messageClasses = messageHasError ? 'invalid' : '';

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            className={styles.contact}
        >

            {error && <p className={styles['error-text']}>Form is invalid, please make sure you filled in all of the fields correctly</p>}
            {sent && <p className={styles.sent}>Form has been sent, we'll get back to you soon.</p>}
            {sendError && <p className={styles['error-text']}>We had trouble sending the email, please try again.</p>}

            <form ref={formRef} onSubmit={formSubmitHandler}>
                <label>Name</label>
                <input 
                    className={styles[`${inputClasses}`]} 
                    type="text"
                    onBlur={nameBlurHandler} 
                    onChange={nameChangeHandler} 
                    value={name}
                    name="name" 
                />
                <label>Email</label>
                <input 
                    className={styles[`${emailClasses}`]}
                    type="text"
                    onBlur={emailBlurHandler}
                    onChange={emailChangeHandler}
                    value={email}
                    name="email"
                />
                <label>Message</label>
                <textarea 
                    className={styles[[`${messageClasses}`]]}
                    type="text"
                    onBlur={messageBlurHandler}
                    onChange={messageChangeHandler}
                    value={message}
                    name="message"
                />
                <button className={styles.submit} type="submit">Submit</button>
            </form>
        </motion.div>
    );
}

export default Contact;