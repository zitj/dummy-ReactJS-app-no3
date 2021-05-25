import React, { useState, Fragment, useEffect } from 'react';
import styles from './style/FormModal.module.css';

const FormModal = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredURL, setEnteredURL] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [isEnteredNameValid, setIsEnteredNameValid] = useState(true);
    const [isEnteredURLValid, setIsEnteredURLValid] = useState(true);

    useEffect(() => {
        const indetifier = setTimeout(() => {
            if (!isEnteredNameValid || !isEnteredURLValid) {
                setIsValid(false);
            } else {
                setIsValid(true);
            }
        }, 300);

        return () => {
            clearTimeout(indetifier);
        };
    }, [isEnteredNameValid, isEnteredURLValid, isValid]);

    const addNewUser = (event) => {
        event.preventDefault();
        if (!enteredName) {
            setIsEnteredNameValid(false);
            return;
        }

        if (!enteredURL) {
            setIsEnteredURLValid(false);
            return;
        }

        if (!isValid) {
            return;
        } else {
            props.getNewUserData(enteredName, enteredURL);
            setEnteredName('');
            setEnteredURL('');
            props.hideForm();
        }
    };

    const enterNameHandler = (event) => {
        setEnteredName(event.target.value);
        if (event.target.value.trim().length === 0) {
            setIsEnteredNameValid(false);
        } else {
            setIsEnteredNameValid(true);
        }
    };
    const enterURLHandler = (event) => {
        setEnteredURL(event.target.value);
        if (!event.target.value.includes('https')) {
            setIsEnteredURLValid(false);
        } else {
            setIsEnteredURLValid(true);
        }
    };

    return (
        <Fragment>
            <form action="submit" onSubmit={addNewUser} className={styles.form}>
                <div className={styles['actual-input']}>
                    <label
                        htmlFor="name"
                        className={`${!isEnteredNameValid && styles.error}`}
                    >
                        Your name
                    </label>
                    <input
                        type="text"
                        value={enteredName}
                        onChange={enterNameHandler}
                        className={`${!isEnteredNameValid && styles.error}`}
                    />
                    {!isEnteredNameValid && (
                        <p className={styles.proba}>Please enter your name</p>
                    )}
                </div>
                <div className={styles['actual-input']}>
                    <label
                        htmlFor="url"
                        className={`${!isEnteredURLValid && styles.error}`}
                    >
                        URL to your picture
                    </label>
                    <input
                        type="text"
                        value={enteredURL}
                        onChange={enterURLHandler}
                        className={`${!isEnteredURLValid && styles.error}`}
                    />
                    {!isEnteredURLValid && (
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
