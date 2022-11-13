import styles from './form.module.css';
import useInput from '../../Hooks/use-input';
import { useState, useRef, Fragment } from 'react';
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
        value: rec,
        isValid: recIsValid,
        hasError: recHasError,
        valueChangedHandler: recChangeHandler,
        inputBlurHandler: recBlurHandler,
        reset: resetRec
    } = useInput((data) => data !== '- Select -');

    const sendEmail = (event) => {
        event.preventDefault();

        if (!nameIsValid || !emailIsValid || !recIsValid) {
            setError(true);
            return;
        }

        emailjs.sendForm('service_819shjh', 'template_rtetycy', formRef.current, 'sZsdUfD-r40m-DntK')
        .then((result) => {
            setHasSent(true);
            setError(false);
            setSendingError(false);
            console.log(result);

            resetName();
            resetEmail();
        }, (error) => {
            setSendingError(true);
            setHasSent(false);
            console.log(error);
        });
    }

    let nameClasses = nameHasError ? 'invalid' : '';
    let emailClasses = emailHasError ? 'invalid' : '';
    let recClasses = recHasError ? 'invalid' : '';

    return (
        <Fragment>

            {error && <p className={styles['error-text']}>The form is invalid. Please make sure you correctly filled in the required fields.</p>}
            {hasSent && <p className={styles.sent}>Your form has been sent.</p>}
            {sendingError && <p className={styles['error-text']}>There was a problem while sending the form. Please try again.</p>}

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
                    <select
                        className={styles[`${recClasses}`]}
                        onChange={recChangeHandler}
                        onBlur={recBlurHandler}
                        value={rec}
                        name='rec'
                    >
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
                        placeholder='optional'
                        name='message'
                    />

                    <button className={styles.submit}>Submit</button>
                </form>
            </div>
        </Fragment>
    );
}

export default RecruitForm;