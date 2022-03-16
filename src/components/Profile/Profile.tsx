import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import state, {PostType} from '../../redux/state';

type PropsType = {
    posts: Array<PostType>
}
const Profile = (props: PropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={state.profilePage.posts} />
        </div>
    );
}

export default Profile;