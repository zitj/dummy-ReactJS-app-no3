import React, { useContext } from 'react';
import styles from './style/ListOfProfiles.module.css';
import Profile from '../Profile/Profile';
import NewProfileContext from '../../context/new-profile-context';

const ListOfProfiles = (props) => {
    const newProfileContext = useContext(NewProfileContext);

    return (
        <div className={styles.container}>
            {newProfileContext.profiles
                .map((profile) => {
                    return (
                        <Profile
                            key={profile.id}
                            name={profile.name}
                            url={profile.url}
                            id={profile.id}
                        ></Profile>
                    );
                })
                .reverse()}
        </div>
    );
};

export default ListOfProfiles;
