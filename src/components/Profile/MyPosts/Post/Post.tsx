import React from 'react';
import s from './Post.module.css';
import {DialogsType, MessageType} from '../../../../index';

type PropsType = {
    message: string
    likesCount: number
}

const Post = (props: PropsType) => {

    return (
        <div className={s.item}>
            <img src={'https://www.meme-arsenal.com/memes/be50e6ba99654b5455027dcc82beb5b3.jpg'}/>
            { props.message }
            <div>
                <span>like</span> { props.likesCount }
            </div>
        </div>
    );
}

export default Post;