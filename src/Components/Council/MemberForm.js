import { useEffect, useState } from 'react';
import styles from './member.module.css';
import useInput from '../../Hooks/use-input';

const MemberForm = ({ onChange, num, council }) => {
    const [file, setFile] = useState();

    const {
        value: name,
        isValid: nameIsValid,
        hasError: nameHasError,
        valueChangedHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetName
    } = useInput((val) => val !== '');

    const {
        value: position,
        isValid: positionIsValid,
        hasError: positionHasError,
        valueChangedHandler: positionChangeHandler,
        inputBlurHandler: positionBlurHandler,
        reset: resetPosition
    } = useInput((val) => val !== '');

    const {
        value: year,
        isValid: yearIsValid,
        hasError: yearHasError,
        valueChangedHandler: yearChangeHandler,
        inputBlurHandler: yearBlurHandler,
        reset: resetYear
    } = useInput((val) => val !== '');

    const {
        value: committee,
        isValid: committeeIsValid,
        hasError: committeeHasError,
        valueChangedHandler: committeeChangeHandler,
        inputBlurHandler: committeeBlurHandler,
        reset: resetCommittee
    } = useInput((val) => val !== '');

    const {
        value: email,
        isValid: emailIsValid,
        hasError: emailHasError,
        valueChangedHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmail
    } = useInput((val) => val !== '');

    const fileChangeHandler = (event) => {
        setFile(event.target.files[0]);
    }

    useEffect(() => {
        onChange({ name, year, position, committee, image: file, email }, num);
    }, [name, position, year, committee, file, email])

    return (
        <div className={styles.form}>
            <form>
                <label>Name</label>
                <input type='text' name='name' value={name} onChange={nameChangeHandler} />
                <label>Year ('XX)</label>
                <input type='number' name='year' value={year} onChange={yearChangeHandler} />
                {council && <label>Position</label>}
                {council && <input type='text' name='title' value={position} onChange={positionChangeHandler} />}
                {council && <label>Email</label>}
                {council && <input type='text' name='email' value={email} onChange={emailChangeHandler} />}
                {!council && <div>
                    <select onChange={committeeChangeHandler}>
                        <option value="A">Alumni</option>
                        <option value="R">Rush Team</option>
                    </select>
                </div>}
                {committee == 'R' && !council && <div>
                    <select onChange={positionChangeHandler}>
                        <option value="Chair">Chair</option>
                        <option value="Captain">Captain</option>
                    </select>
                </div>}

                {council && <label>Image</label>}
                {council && <input type='file' onChange={fileChangeHandler} />}
            </form>
        </div>
    );
}

export default MemberForm;