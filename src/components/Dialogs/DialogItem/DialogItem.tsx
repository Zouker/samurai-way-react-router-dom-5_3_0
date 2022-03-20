import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from 'react-router-dom';

type PropsType = {
    id: number
    name: string
    avatar: string
}

const DialogItem = (props: PropsType) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <img className={s.avatar} src={props.avatar} alt={'avatar'}/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;