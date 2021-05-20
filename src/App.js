import React, { useState } from 'react';
import AddProfile from './components/AddProfile/AddProfile';
import ListOfProfiles from './components/ListOfProfiles/ListOfProfiles';

function App() {
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
        <div className="wrapper">
            <AddProfile getNewUserData={getNewUserData}></AddProfile>
            <ListOfProfiles
                profiles={profiles}
                deleteProfile={deleteProfile}
            ></ListOfProfiles>
        </div>
    );
}

export default App;
