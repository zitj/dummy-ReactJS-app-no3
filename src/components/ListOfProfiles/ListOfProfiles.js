import React from 'react';
import styles from './style/ListOfProfiles.module.css';
import Card from '../UI/Card/Card';

const ListOfProfiles = (props) => {
    return (
        <div className={styles.container}>
            {props.profiles
                .map((profile) => {
                    return (
                        <Card key={profile.id}>
                            <div className={styles.profile}>
                                <div className={styles.frame}>
                                    <img src={profile.url} alt="profile-pic" />
                                </div>
                                <h3>{profile.name}</h3>
                            </div>
                        </Card>
                    );
                })
                .reverse()}
        </div>
    );
};

export default ListOfProfiles;
