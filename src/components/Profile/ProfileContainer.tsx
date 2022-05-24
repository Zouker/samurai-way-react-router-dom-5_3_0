import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {RootStateType} from '../../redux/redux-store';
import {getUserProfile} from '../../redux/profile-reducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

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
    profile: ProfileType | null
}

type MapDispatchPropsType = {
    getUserProfile: (userId: string) => void
}

type PathParamsType = {
    userId: string,
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {

        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2';
        }

        this.props.getUserProfile(userId)

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

export default compose<React.ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, {}, RootStateType>(mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer);