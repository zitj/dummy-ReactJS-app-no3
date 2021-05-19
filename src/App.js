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
    return (
        <div className="wrapper">
            <AddProfile getNewUserData={getNewUserData}></AddProfile>
            <ListOfProfiles profiles={profiles}></ListOfProfiles>
        </div>
    );
}

export default App;
