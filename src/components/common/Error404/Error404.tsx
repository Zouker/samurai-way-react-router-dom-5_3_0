import React from 'react';
import error404 from '../../../assets/images/error404.gif'
import styles from './Error404.module.css'

export const Error404 = () => {
    return (
        <div className={styles.error404}>
            <img src={error404} alt={'Page not found'}/>
        </div>
    );
};