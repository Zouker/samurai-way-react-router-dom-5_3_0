import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import state, {addPost, PostsType} from '../../redux/state';

type PropsType = {
    posts: Array<PostsType>
    addPost: (postMessage: string) => void
    updateNewPostText: (newText: string) => void
}
const Profile = (props: PropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts updateNewPostText={props.updateNewPostText}
                     messageForNewPost={state.profilePage.messageForNewPost}
                     posts={state.profilePage.posts}
                     addPost={addPost}/>
        </div>
    );
}

export default Profile;