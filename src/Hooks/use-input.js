import { useState } from "react"

const useInput = (validateData) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const isValid = validateData(enteredValue);
    const hasError = !isValid && isTouched;

    const valueChangedHandler = (event) => {
        setEnteredValue(event.target.value);
    }

    const inputBlurHandler = () => {
        setIsTouched(true);
    }

    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    }

    return {
        value: enteredValue,
        isValid,
        hasError,
        valueChangedHandler,
        inputBlurHandler,
        reset
    }
}

export default useInput;