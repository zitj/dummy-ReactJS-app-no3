import React, { useState, Fragment } from 'react';
import styles from './style/AddProfile.module.css';
import Card from '../UI/Card/Card';
import FormModal from '../FormModal/FormModal';

const AddProfile = (props) => {
    const [isClicked, setIsClicked] = useState(false);

    let cardContent = '';

    const setIsClickedHandler = () => {
        return isClicked ? setIsClicked(false) : setIsClicked(true);
    };

    const getNewUserData = (name, url) => {
        props.getNewUserData(name, url);
    };

    if (isClicked) {
        cardContent = (
            <FormModal
                hideForm={setIsClickedHandler}
                getNewUserData={getNewUserData}
            ></FormModal>
        );
    } else {
        cardContent = (
            <div className={styles.content} onClick={setIsClickedHandler}>
                <img
                    src="https://img.icons8.com/pastel-glyph/64/000000/add-user-male--v2.png"
                    alt="add-new-profile"
                />
                <h2>Add new profile</h2>
            </div>
        );
    }

    return (
        <Fragment>
            <Card>{cardContent}</Card>
        </Fragment>
    );
};

export default AddProfile;
