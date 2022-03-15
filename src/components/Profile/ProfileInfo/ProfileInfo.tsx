import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.profileImg}>
                <img
                    src={'https://hylinecruises.com/wp-content/uploads/2019/09/Winner_Outdoor-e1628881489780-1080x400.jpg'} alt={'Profile Img'}/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
};

export default ProfileInfo;