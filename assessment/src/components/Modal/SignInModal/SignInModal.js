import React ,{useRef}from "react";
import styles from './SignInModal.module.css';
import { auth } from "../../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignInModal = () => {
    const navigate = useNavigate()
    const emailRef = useRef()
    const passwordRef = useRef()
    const SubmitHandler = async (e) => {
        e.preventDefault()
        const userData = {
            email:emailRef.current.value,
            password:passwordRef.current.value
        }
        try{
            await signInWithEmailAndPassword(auth, userData.email, userData.password)
            navigate('/main')
        }
        catch(error){
            alert("Error: " + error.message.slice(error.message.indexOf("/") + 1, error.message.indexOf(")")).toUpperCase().replace(/-/g, ' '))//regex expression)
        }
    }
    return(
        <div className={`${styles.container__form} ${styles.container__signin}`}>
            <form action="#" className={styles.form} onSubmit={SubmitHandler} id="form2">
                <h2 className={styles.form__title}>Sign In</h2>
                <input type="email" placeholder="Email" className={styles.input} ref={emailRef} />
                <input type="password" placeholder="Password" className={styles.input} ref={passwordRef}/>
                <a href="/#" className={styles.link}>Forgot your password?</a>
                <button className={styles.btn}>Sign In</button>
            </form>
	    </div>
    )
}
export default SignInModal;