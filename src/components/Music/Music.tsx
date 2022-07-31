import React from 'react';
import UC from '../../assets/images/under_construction.gif';
import styles from './Music.module.css'

const Music = () => {
    return (
        <div className={styles.container}>
            <img src={UC} alt={'Under construction'}/>
        </div>
    );
};

export default Music;