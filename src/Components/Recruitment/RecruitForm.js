import styles from './form.module.css';
import useInput from '../../Hooks/use-input';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const RecruitForm = () => {
    const [hasSent, setHasSent] = useState(false);
    const [error, setError] = useState(false);
    const [sendingError, setSendingError] = useState(false);
    const formRef = useRef();

    const {
        value: name,
        hasError: nameHasError,
        isValid: nameIsValid,
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

    const sendEmail = (event) => {
        event.preventDefault();

        if (!nameIsValid || !emailIsValid || !messageIsValid) {
            setError(true);
            return;
        }
    }

    let nameClasses = nameHasError ? 'invalid' : '';
    let emailClasses = emailHasError ? 'invalid' : '';
    let messageClasses = messageHasError ? 'invalid' : '';

    return (
            <div className={styles['form-wrap']}>
                <form ref={formRef} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input 
                        className={styles[`${nameClasses}`]}
                        type='text'
                        onChange={nameChangeHandler}
                        onBlur={nameBlurHandler}
                        value={name}
                        name='name'
                    />
                    <label>Phone Number</label>
                    <input 
                        type='text' 
                        placeholder='optional'
                        name='phone'
                    />
                    <label>Email</label>
                    <input 
                        className={styles[`${emailClasses}`]}
                        type='text' 
                        onChange={emailChangeHandler}
                        onBlur={emailBlurHandler}
                        value={email}
                        name='email'
                    />

                    <label>Are you recommending a rushee?</label>
                    <select>
                        <option>- Select -</option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>

                    <label>Are you an Alumni</label>
                    <select>
                        <option>- Select -</option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>

                    <label>Anything you'd like to ask or tell the Rush Team?</label>
                    <textarea 
                        className={styles[`${messageClasses}`]}
                        onChange={messageChangeHandler}
                        onBlur={messageBlurHandler}
                        value={message}
                        name='message'
                    />

                    <button className={styles.submit}>Submit</button>
                </form>
            </div>
    );
}

export default RecruitForm;