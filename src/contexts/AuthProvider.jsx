import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import React, { createContext } from 'react';
import { useEffect } from "react";
import { useState } from "react";
import app from "../firebase/firebase.config";

const auth = getAuth(app);
export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [userEmail, setUserEmail] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);

    }
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                alert('Please check your Email and verify your Email Address.');
            })
    }

    const resetPassword = (email) => {
        sendPasswordResetEmail(auth, email)
    }

    const logIn = (email, password) => {
        setLoading(true);
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
            setUser(currentUser);
            setLoading(false);
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
        error,
        setError,
        createUser,
        verifyEmail,
        resetPassword,
        logIn,
        signInWithGoogle,
        signInWithGitHub,
        logOut,
        loading,


    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;