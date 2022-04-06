import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {ActionsTypes, addPostAC, PostsType, updateNewPostTextAC} from '../../../redux/state';

type PropsType = {
    posts: Array<PostsType>
    messageForNewPost: string
    dispatch: (action: ActionsTypes) => void
}

const MyPosts = (props: PropsType) => {

    const postsElements = props.posts.map(p => <Post key={p.id} message={p.message}
                                                     likesCount={p.likesCount}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        props.dispatch(addPostAC(props.messageForNewPost))
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.dispatch(updateNewPostTextAC(text))
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} value={props.messageForNewPost} onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    );
}

export default MyPosts;