import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import state, {PostType} from '../../../redux/state';

type PropsType = {
    posts: Array<PostType>
}

const MyPosts = (props: PropsType) => {

    let postsElements =  state.profilePage.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea></textarea></div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    );
}

export default MyPosts;