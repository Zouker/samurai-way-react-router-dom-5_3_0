import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {RootStateType} from '../../redux/redux-store';
import {setUserProfile} from '../../redux/profile-reducer';

export type ProfileType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotosType
}

export type ContactsType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}

export type PhotosType = {
    small: string
    large: string
}

type MapStatePropsType = {
    profile: ProfileType | null // типизация?!
}

type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfile(response.data)
        });
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => ({
    profile: state.profilePage.profile
});

export default connect<MapStatePropsType, MapDispatchPropsType, {}, RootStateType>(mapStateToProps, {setUserProfile})(ProfileContainer);