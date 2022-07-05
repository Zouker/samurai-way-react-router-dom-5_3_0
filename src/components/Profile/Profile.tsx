import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ProfileType} from './ProfileContainer';

type ProfilePropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: string) => void
    saveProfile: (profile: ProfileType | null) => void
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo
                savePhoto={props.savePhoto}
                isOwner={props.isOwner}
                profile={props.profile}
                status={props.status}
                saveProfile={props.saveProfile}
                updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;