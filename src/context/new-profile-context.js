import React, { useState } from 'react';

const NewProfileContext = React.createContext({
    profiles: [],
    onDelete: (id) => {},
    onCreate: (name, url) => {},
});

export const NewProfileContextProvider = (props) => {
    const [profiles, setProfiles] = useState([]);
    const getNewUserData = (name, url) => {
        setProfiles((prevProfiles) => {
            return [{ name: name, url: url, id: Date.now() }, ...prevProfiles];
        });
    };
    const deleteProfile = (id) => {
        setProfiles((prevData) => {
            const updatedData = prevData.filter((profile) => profile.id !== id);
            return updatedData;
        });
    };
    return (
        <NewProfileContext.Provider
            value={{
                profiles: profiles,
                onDelete: deleteProfile,
                onCreate: getNewUserData,
            }}
        >
            {props.children}
        </NewProfileContext.Provider>
    );
};

export default NewProfileContext;
