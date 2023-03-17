import styles from './Overlay.module.css';
import React,{useState} from 'react';

const Overlay = () => {
    const [overlayStyle, setOverlayStyle] = useState({})
    const [btnState , setBtnState] = useState(false)
    const handleOverlay = (e) => {
        e.preventDefault();
        if(e.target.id === 'signIn'){
            setOverlayStyle({
                transform: "translateX(0%)"
            })
            setBtnState(false)
        }
        else{
            setOverlayStyle({
                transform: "translateX(-100%)"
            })
            setBtnState(true)
        }
    }

    return(
        <div className={`${styles.container__overlay}`} style={overlayStyle}>
            <div className={styles.overlay}>
                {btnState &&
                    <div className={`${styles.overlay__panel} ${styles.overlay__right}`}>
                        <button className={styles.btn} onClick={handleOverlay} id="signIn">Sign In</button>
                    </div>
                }

               {!btnState && 
                <div className={`${styles.overlay__panel} ${styles.overlay__right}`}>
                    <button className={styles.btn} onClick={handleOverlay} id="signUp">Sign Up</button>
                </div>
                }

            </div>
	</div>
    )
}
export default Overlay;