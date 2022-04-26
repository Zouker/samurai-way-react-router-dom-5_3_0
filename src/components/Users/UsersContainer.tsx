import React from 'react';
import {connect} from 'react-redux';
import {followAC, initialStateType, setUsersAC, unfollowAC, UserType} from '../../redux/users-reducer';
import {RootStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';
import Users from './Users';

type MapStatePropsType = {
    usersPage: initialStateType
}

type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        usersPage: state.usersPage
    }
}

export type UsersPropsType = MapStatePropsType & MapDispatchToPropsType

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
