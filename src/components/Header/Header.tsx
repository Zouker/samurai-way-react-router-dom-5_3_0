import React, {useEffect} from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';
import {Button} from 'antd';
import userPhoto from '../../assets/images/user.png';
import social from '../../assets/images/social_network.png'
import {useAppDispatch, useAppSelector} from '../../redux/redux-store';
import {profileAPI} from '../../api/api';
import {setUserPhotos} from '../../redux/profile-reducer';

type HeaderPropsType = {
    isAuth: boolean,
    login: string | null,
    logout: () => void,
}

const Header: React.FC<HeaderPropsType> = (props) => {
    const userId = useAppSelector(state => state.auth.userId)
    const photo = useAppSelector(state => state.profilePage.profile.photos?.small)
    const userProfile = useAppSelector(state => state.profilePage)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (Object.entries(userProfile).length) profileAPI.getProfile(userId).then((res) => dispatch(setUserPhotos(res.data.photos || '')))
    }, [])

    return (
        <header className={s.header}>
            <img className={s.logo} src={social} alt={'social network img'}/>
            <div className={s.title}>Social Network</div>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div className={s.logout}>{props.login} {<img className={s.avatar} src={photo || userPhoto}
                                                                    alt={'avatar'}/>}
                        <Button
                            type={'default'}
                            shape="round"
                            onClick={props.logout}
                        >Log out
                        </Button>
                    </div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
};

export default Header;