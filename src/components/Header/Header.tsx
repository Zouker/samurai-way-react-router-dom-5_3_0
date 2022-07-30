import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';
import {Button} from 'antd';
import social from '../../assets/images/social_network.png'
import {useAppSelector} from '../../redux/redux-store';

type HeaderPropsType = {
    isAuth: boolean,
    login: string | null,
    logout: () => void,
}

const Header: React.FC<HeaderPropsType> = (props) => {
    const photo = useAppSelector(state => state.profilePage.profile?.photos.small)

    return (
        <header className={s.header}>
            <img className={s.logo} src={social} alt={'social network img'}/>
                <div className={s.title}>Social Network</div>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div className={s.logout}>{props.login} {<img className={s.avatar} src={photo} alt={'avatar'}/>}
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