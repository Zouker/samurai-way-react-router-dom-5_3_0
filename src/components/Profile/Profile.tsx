import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import state, {addPost, PostType} from '../../redux/state';

type PropsType = {
    posts: Array<PostType>
    addPost: (postMessage: string) => void
}
const Profile = (props: PropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={state.profilePage.posts} addPost={addPost}/>
        </div>
    );
}

export default Profile;