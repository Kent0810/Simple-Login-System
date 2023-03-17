import React from "react";
import styles from './SignUpPage.module.css';

import SignUpModal from "../../components/Modal/SignUpModal/SignUpModal";
import SignInModal from "../../components/Modal/SignInModal/SignInModal";
import Overlay from "../../components/Overlay/Overlay";
const SignUpPage = () => {
    return(
        <div className={`${styles.container}`}>
            <SignInModal />
            <SignUpModal />
            <Overlay />
        </div>
    )
}

export default SignUpPage;
