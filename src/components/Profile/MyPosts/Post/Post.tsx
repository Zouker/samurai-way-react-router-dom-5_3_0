import React from 'react';
import classes from './Post.module.css';

type PostPropsType = {
    message: string
    likesCount: number
}

const Post = (props: PostPropsType) => {

    return (
        <div className={classes.item}>
            <img src={'https://www.meme-arsenal.com/memes/be50e6ba99654b5455027dcc82beb5b3.jpg'}/>
            { props.message }
            <div>
                <span>like</span> { props.likesCount }
            </div>
        </div>
    );
}

export default Post;