import React, { useState } from 'react';
import styles from './style/FormModal.module.css';

const FormModal = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredURL, setEnteredURL] = useState('');

    const addNewUser = (event) => {
        event.preventDefault();
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
        <div>
            <form action="submit" onSubmit={addNewUser} className={styles.form}>
                <div className="actual-input">
                    <label htmlFor="name">Your name</label>
                    <input
                        type="text"
                        value={enteredName}
                        onChange={enterNameHandler}
                    />
                </div>
                <div className="actual-input">
                    <label htmlFor="name">URL to your picture</label>
                    <input
                        type="text"
                        value={enteredURL}
                        onChange={enterURLHandler}
                    />
                </div>
                <button type="submit">Add</button>
                <button onClick={props.hideForm}>Cancel</button>
            </form>
        </div>
    );
};

export default FormModal;
