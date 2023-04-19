import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from '../../../public/firebase.confiq';
export const AuthContext = createContext(null);

const auth = getAuth(app)
const AuthProvider = ({children}) => {

const [user, setUser] = useState(null);

const createUser = (email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password);
}

const signIn = (email, password)=>{
    return signInWithEmailAndPassword(auth, email, password);
}

const LogOut = ()=>{
    return signOut(auth)
}

useEffect(()=>{
   const unsub =  onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser)
    });
    return ()=>{
        return unsub();
    }
},[])

    const authInfo = {
        user,
        createUser,
        signIn,
        LogOut,
    };

    return (
    <AuthContext.Provider value={authInfo}>
{children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;