import { createContext ,useContext,useEffect,useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut ,
    onAuthStateChanged
} from 'firebase/auth'
 import { auth } from "../firebase";

const UserAuthContext = createContext();

export const UserAuthContextProvider = ({children}) =>{
    const [user ,setuser] = useState();

    function SignUp(email,password){
        return createUserWithEmailAndPassword(auth,email,password)
    }

    function SignIn(email,password){
        return  signInWithEmailAndPassword(auth,email,password)
    }

    function logout()  {
         return signOut()
    }

    useEffect(() => {
       const unsubscribe =  onAuthStateChanged(auth,(currentUser)=> {
             setuser(currentUser);
        })
        return ()=> {
            unsubscribe();
        }
    }, [])
    
    return(
        <UserAuthContext.Provider value={{ user,SignUp ,SignIn, logout}}>{children}</UserAuthContext.Provider>
    )
}

export function useUserAuth(){
    return useContext(UserAuthContext)
}