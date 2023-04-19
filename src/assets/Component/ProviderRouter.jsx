import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../../../public/firebase.confiq';
import { createBrowserRouter } from 'react-router-dom';

export const AuthContext = createBrowserRouter(null);

const auth = getAuth(app);

const PProviderRouter = ({ children }) => {

    const [data, setData] = useState('');

    const createUser = event = {

    }

    const authInfo = {
        name: 'ghgh'
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default PProviderRouter;