import React from 'react';
import UC from '../../assets/images/under-constr.gif'
import styles from './News.module.css'

const News = () => {
    return (
        <div className={styles.container}>
            <img src={UC} alt={'Under construction'}/>
        </div>
    );
};

export default News;