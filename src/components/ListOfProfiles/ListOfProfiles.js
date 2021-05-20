import React from 'react';
import styles from './style/ListOfProfiles.module.css';
import Profile from '../Profile/Profile';

const ListOfProfiles = (props) => {
    const deleteBtnHandler = (id) => {
        console.log(
            // `You have deleted ${event.target.parentNode.children[2].innerText}'s profile`
            `You have deleted profile with id no ${id}`
        );
        props.deleteProfile(id);
    };

    return (
        <div className={styles.container}>
            {props.profiles
                .map((profile) => {
                    return (
                        <Profile
                            key={profile.id}
                            name={profile.name}
                            url={profile.url}
                            id={profile.id}
                            onDelete={deleteBtnHandler}
                        ></Profile>
                    );
                })
                .reverse()}
        </div>
    );
};

export default ListOfProfiles;
