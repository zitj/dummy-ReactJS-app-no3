import React from 'react';
import AddProfile from './components/AddProfile/AddProfile';
import ListOfProfiles from './components/ListOfProfiles/ListOfProfiles';

function App() {
    return (
        <div className="wrapper">
            <AddProfile></AddProfile>
            <ListOfProfiles></ListOfProfiles>
        </div>
    );
}

export default App;
