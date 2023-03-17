import React,{useRef} from 'react';

import styles from './SignUpModal.module.css';

import {db, auth } from '../../../config/firebase';
import { doc, setDoc } from "firebase/firestore"

import { createUserWithEmailAndPassword } from 'firebase/auth';

import { useNavigate } from 'react-router-dom';

const SignUpModal = () => {

    let navigate = useNavigate()

    const userNameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const birthRef = useRef()
    const phoneRef = useRef()

    const SubmitHandler = async (e) =>{
        e.preventDefault()
        const userData = {
            id: Math.random(),
            userName: userNameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            birth: birthRef.current.value,
            phone: phoneRef.current.value
        }
        try {
            if (new Date(userData.birth).getFullYear() > new Date().getFullYear() - 13) {
                throw new Error("You must be at least 13 years old to use our service !")
            }
            else if(userData.phone.length < 9){
                throw new Error("Phone Number too short ! ")

            }

            await createUserWithEmailAndPassword(auth, userData.email, userData.password)

            delete userData.password // dont push our password to database

            //check if form is valid
            await setDoc(doc(db, "USERS_INFO", auth.currentUser.uid), userData)

            navigate('/main')
        }
        catch(error){
            alert("Error: " + error.message.slice(error.message.indexOf("/") + 1, error.message.indexOf(")")).toUpperCase().replace(/-/g, ' '))//regex expression)
        }
    }

    return(
        <div className={`${styles.container__form} ${styles.container__signup}`}>
            <form onSubmit={SubmitHandler} action="#" className={styles.form} id="form1">
                <h2 className={styles.form__title}>Sign Up</h2>
                <input type="text" placeholder="User Name" className={styles.input} ref={userNameRef}/>
                <input type="email" placeholder="Email" className={styles.input} ref={emailRef}/>
                <input type="password" placeholder="Password" className={styles.input} ref={passwordRef}/>
                <input type="date" placeholder="Birth Date" className={styles.input} ref={birthRef}/>
                <input type="text" placeholder="Phone No." className={styles.input} ref={phoneRef}/>
                <button class={styles.btn}>Sign Up</button>
            </form>
	    </div>
    )
}

export default SignUpModal;