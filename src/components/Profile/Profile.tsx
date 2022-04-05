import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {PostsType} from '../../redux/state';

type PropsType = {
    posts: Array<PostsType>
    addPost: (postMessage: string) => void
    updateNewPostText: (newText: string) => void
    messageForNewPost: string
}
const Profile = (props: PropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts updateNewPostText={props.updateNewPostText}
                     messageForNewPost={props.messageForNewPost}
                     posts={props.posts}
                     addPost={props.addPost}/>
        </div>
    );
}

export default Profile;