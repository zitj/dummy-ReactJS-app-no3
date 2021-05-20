import React from 'react';
import styles from './style/Profile.module.css';
import Card from '../UI/Card/Card';

const Profile = (props) => {
    const deleteProfile = () => {
        props.onDelete(props.id);
    };

    return (
        <Card>
            <div className={styles.profile}>
                <button className={styles.deleteBtn} onClick={deleteProfile}>
                    x
                </button>
                <div className={styles.frame}>
                    <img src={props.url} alt="profile-pic" />
                </div>
                <h3>{props.name}</h3>
            </div>
        </Card>
    );
};

export default Profile;
