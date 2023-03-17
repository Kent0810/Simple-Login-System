import React from "react";

import styles from './MainPage.module.css';
import UserModal from "../../components/Modal/UserModal/UserModal";

const MainPage = () => {
    return(
        <div className={styles.container}>
            <UserModal />
        </div>
    )
}
export default MainPage;