import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, isLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        isLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (name) => {
        isLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name})
    }

    const loginUser = (email, password) => {
        isLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            isLoading(false)
        })
        return () => unsubscribe()
    }, [])

    const loginWithGoogle = () => {
        isLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        isLoading(true)
        localStorage.removeItem('resaleToken')
        return signOut(auth)
    }

    const authInfo = {
        user,
        loading,
        createUser,
        updateUserProfile,
        loginUser,
        loginWithGoogle,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;