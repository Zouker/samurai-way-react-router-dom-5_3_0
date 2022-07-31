import React from 'react';
import styles from '../News/News.module.css';
import UC from '../../assets/images/under-construction.png';

const Settings = () => {
    return (
        <div className={styles.container}>
            <img src={UC} alt={'Under construction'}/>
        </div>
    );
};

export default Settings;