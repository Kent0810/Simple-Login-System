import styles from './UserModal.module.css'
import React,{useEffect,useRef} from 'react';
import { doc,getDoc,setDoc } from 'firebase/firestore';
import { auth,db } from '../../../config/firebase';
import { useNavigate } from 'react-router-dom';


const UserModal = () =>{

    const nameRef = useRef()
    const birthRef = useRef()
    const emailRef = useRef()
    const phoneRef = useRef()
    const navigate =useNavigate()
    useEffect(()=>{
        
        const fetchData = async () => {
            setTimeout(async ()=>{
                try {
                    if (auth.currentUser.uid) {
                        const docRef = doc(db, "USERS_INFO", auth.currentUser.uid)
                        const docSnap = await getDoc(docRef)
                        nameRef.current.value =docSnap.data().userName
                        birthRef.current.value = docSnap.data().birth
                        emailRef.current.value = docSnap.data().email
                        phoneRef.current.value = docSnap.data().phone
                    }
                  }
                  catch (error) {
                    console.log(error)
                  }
                }
            , 500);          
        }
        fetchData()
    },[])

    const SubmitHandler = async (e) =>{
        e.preventDefault()
        const userData = {
            id: Math.random(),
            userName: nameRef.current.value,
            email: emailRef.current.value,
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

            //check if form is valid
            await setDoc(doc(db, "USERS_INFO", auth.currentUser.uid), userData)
            alert("Succes: Plesae Refresh To See The Changes In Action")
        }
        catch(error){
            alert("Error: " + error.message.slice(error.message.indexOf("/") + 1, error.message.indexOf(")")).toUpperCase().replace(/-/g, ' '))//regex expression)
        }
        
    }



    return(
        <div className={`${styles.container__form} ${styles.container__user}`}>
            <form action="#" onSubmit={SubmitHandler} className={styles.form} id="form1">
                <h2 className={styles.form__title}>Profile</h2>
                <input type="text" placeholder="Full Name" className={styles.input} readOnly ref={nameRef}/>
                <input type="date" placeholder="Day of Birth" className={styles.input} ref={birthRef} />
                <input type="email" placeholder="Email" className={styles.input} readOnly ref={emailRef}  />
                <input type="phone" placeholder="Phone No." className={styles.input} ref={phoneRef}/>
                <div className={styles.container__form__bottom}>
                    <button type='submit' class={styles.btn}>Update</button>
                    <button onClick={navigate('/')} class={styles.btn}>Cancel</button>
                </div>
            </form>
	    </div>
    )
}
export default UserModal;