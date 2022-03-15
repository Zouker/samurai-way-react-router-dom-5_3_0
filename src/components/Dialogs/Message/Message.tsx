import React from 'react';
import s from './../Dialogs.module.css'

type PropsType = {
    id: number
    message: string
}

const Message = (props: PropsType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

export default Message;