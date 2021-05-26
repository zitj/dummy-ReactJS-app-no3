import React, { useState, Fragment, useEffect, useReducer } from 'react';
import styles from './style/FormModal.module.css';

const nameReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return { value: action.val, isValid: action.val.trim().length > 2 };
    }
    if (action.type === 'INPUT_BLUR') {
        return { value: state.val, isValid: false };
    }
    return { val: '', isValid: false };
};
const urlReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return { value: action.val, isValid: action.val.includes('https') };
    }
    if (action.type === 'INPUT_BLUR') {
        return { value: state.val, isValid: state.val.includes('https') };
    }
    return { val: '', isValid: false };
};

const FormModal = (props) => {
    // const [enteredName, setEnteredName] = useState('');
    // const [enteredURL, setEnteredURL] = useState('');
    // const [isEnteredNameValid, setIsEnteredNameValid] = useState(true);
    // const [isEnteredURLValid, setIsEnteredURLValid] = useState(true);

    const [isFormValid, setIsFormValid] = useState(null);

    const [nameState, dispatchName] = useReducer(nameReducer, {
        value: '',
        isValid: null,
    });
    const [urlState, dispatchUrl] = useReducer(urlReducer, {
        value: '',
        isValid: null,
    });

    let { isValid: isEnteredNameValid } = nameState;
    let { isValid: isEnteredURLValid } = urlState;

    useEffect(() => {
        const indetifier = setTimeout(() => {
            console.log(isEnteredNameValid, isEnteredURLValid);
            setIsFormValid(isEnteredNameValid && isEnteredURLValid);
        }, 200);

        return () => {
            clearTimeout(indetifier);
        };
    }, [isEnteredNameValid, isEnteredURLValid, isFormValid]);

    const addNewUser = (event) => {
        event.preventDefault();

        if (!isFormValid) {
            if (isEnteredNameValid === null && isEnteredURLValid === null) {
                console.log('Nisi nista napisao');
            }
            return;
        } else {
            props.getNewUserData(nameState.value, urlState.value);
            props.hideForm();
        }
    };

    const enterNameHandler = (event) => {
        // setEnteredName(event.target.value);

        dispatchName({
            type: 'USER_INPUT',
            val: event.target.value,
        });
    };

    // const validateNameHandler = () => {
    //     dispatchName({ type: 'INPUT_BLUR' });
    // };

    const enterURLHandler = (event) => {
        dispatchUrl({ type: 'USER_INPUT', val: event.target.value });
    };
    // const validateUrlHandler = () => {
    //     dispatchUrl({ type: 'INPUT_BLUR' });
    // };

    return (
        <Fragment>
            <form action="submit" onSubmit={addNewUser} className={styles.form}>
                <div className={styles['actual-input']}>
                    <label
                        htmlFor="name"
                        className={`${
                            isEnteredNameValid === false ? styles.error : ''
                        }`}
                    >
                        Your name
                    </label>
                    <input
                        type="text"
                        value={nameState.value}
                        onChange={enterNameHandler}
                        // onBlur={validateNameHandler}
                        className={`${
                            isEnteredNameValid === false ? styles.error : ''
                        }`}
                    />
                    {isEnteredNameValid === false && (
                        <p className={styles.proba}>Please enter your name</p>
                    )}
                </div>
                <div className={styles['actual-input']}>
                    <label
                        htmlFor="url"
                        className={`${
                            urlState.isValid === false ? styles.error : ''
                        }`}
                    >
                        URL to your picture
                    </label>
                    <input
                        type="text"
                        value={urlState.value}
                        onChange={enterURLHandler}
                        // onBlur={validateUrlHandler}
                        className={`${
                            urlState.isValid === false ? styles.error : ''
                        }`}
                    />
                    {urlState.isValid === false && (
                        <p className={styles.proba}>
                            URL must begin with https
                        </p>
                    )}
                </div>
                <button type="submit">Add</button>
                <button onClick={props.hideForm}>Cancel</button>
            </form>
        </Fragment>
    );
};

export default FormModal;
