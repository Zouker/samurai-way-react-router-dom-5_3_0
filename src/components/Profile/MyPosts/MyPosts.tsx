import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import store, {PostsType} from '../../../redux/state';

type PropsType = {
    posts: Array<PostsType>
    messageForNewPost: string
    addPost: (postMessage: string) => void
    updateNewPostText: (newText: string) => void
}

const MyPosts = (props: PropsType) => {

    const postsElements = props.posts.map(p => <Post key={p.id} message={p.message}
                                                                 likesCount={p.likesCount}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        if (newPostElement.current) {
            props.addPost(newPostElement.current.value);
            newPostElement.current.value = '';
        }
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
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