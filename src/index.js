import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App';
import { NewProfileContextProvider } from './context/new-profile-context';

ReactDOM.render(
    <React.StrictMode>
        <NewProfileContextProvider>
            <App />
        </NewProfileContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
