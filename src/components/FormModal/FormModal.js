import React, { useState, Fragment } from 'react';
import styles from './style/FormModal.module.css';

const FormModal = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredURL, setEnteredURL] = useState('');
    const [isValid, setIsValid] = useState(true);

    const addNewUser = (event) => {
        event.preventDefault();
        if (enteredName.trim().length === 0 || enteredURL.trim().length === 0) {
            setIsValid(false);
            return;
        }
        props.getNewUserData(enteredName, enteredURL);
        setEnteredName('');
        setEnteredURL('');
        props.hideForm();
    };

    const enterNameHandler = (event) => {
        setEnteredName(event.target.value);
    };
    const enterURLHandler = (event) => {
        setEnteredURL(event.target.value);
    };

    return (
        <Fragment>
            <form action="submit" onSubmit={addNewUser} className={styles.form}>
                <div className="actual-input">
                    <label
                        htmlFor="name"
                        className={`${!isValid && styles.error}`}
                    >
                        Your name
                    </label>
                    <input
                        type="text"
                        value={enteredName}
                        onChange={enterNameHandler}
                        className={`${!isValid && styles.error}`}
                    />
                </div>
                <div className="actual-input">
                    <label
                        htmlFor="name"
                        className={`${!isValid && styles.error}`}
                    >
                        URL to your picture
                    </label>
                    <input
                        type="text"
                        value={enteredURL}
                        onChange={enterURLHandler}
                        className={`${!isValid && styles.error}`}
                    />
                </div>
                <button type="submit">Add</button>
                <button onClick={props.hideForm}>Cancel</button>
            </form>
        </Fragment>
    );
};

export default FormModal;
