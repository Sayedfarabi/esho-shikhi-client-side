import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import React, { createContext } from 'react';
import { useEffect } from "react";
import { useState } from "react";
import app from "../firebase/firebase.config";

const auth = getAuth(app);
export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [userEmail, setUserEmail] = useState('');
    const [loginError, setLoginError] = useState('');
    const [registerError, setRegisterError] = useState('');
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);

    }
    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser)
        // .then(() => {
        //     alert('Please check your Email and verify your Email Address.');
        // })
    }
    const profileUpdate = (profile) => {
        updateProfile(auth.currentUser, profile)
    }

    const resetPassword = (email) => {
        sendPasswordResetEmail(auth, email)
    }

    const logIn = (email, password) => {
        // setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    };

    const gitHubProvider = new GithubAuthProvider();

    const signInWithGitHub = () => {
        setLoading(true)
        return signInWithPopup(auth, gitHubProvider);
    };

    const logOut = () => {
        signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser?.emailVerified) {
                setUser(currentUser);
                setLoading(false);
            }
            console.log(currentUser)
        })

        return () => {
            unsubscribe()
        };
    }, [])


    const authInfo = {

        user,
        setUser,
        userEmail,
        setUserEmail,
        loginError,
        setLoginError,
        registerError,
        setRegisterError,
        createUser,
        profileUpdate,
        verifyEmail,
        resetPassword,
        logIn,
        signInWithGoogle,
        signInWithGitHub,
        logOut,
        loading,
        setLoading


    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;