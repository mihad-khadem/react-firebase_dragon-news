import React, { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth"
import app from "../Firebase/firebase.config"

export const AuthContext = createContext(null);
const auth = getAuth(app)
const AuthProvider = ({ children }) => {

    // 
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }
    // Sign in with two parameters
    const signIn = (email, password) => {
        setLoading(true)
       return signInWithEmailAndPassword(auth, email, password)
    }
    // Logout function
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    useEffect(() => {
        const unSub = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSub();
        }
    }, [])




  const authInfo = {
    createUser,
    user,
    signIn,
    logOut,
    loading
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
