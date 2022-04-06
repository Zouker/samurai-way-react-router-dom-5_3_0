import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ActionsTypes, PostsType} from '../../redux/state';

type PropsType = {
    posts: Array<PostsType>
    messageForNewPost: string
    dispatch: (action: ActionsTypes) => void
}
const Profile = (props: PropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts messageForNewPost={props.messageForNewPost}
                     posts={props.posts}
                     dispatch={props.dispatch}/>
        </div>
    );
}

export default Profile;