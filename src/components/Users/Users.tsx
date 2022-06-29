import React from 'react';
import {UserType} from '../../redux/users-reducer';
import Paginator from '../common/Paginator/Paginator';
import User from './User';

type PropsType = {
    users: Array<UserType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingInProgress: number[]
    portionSize: number
}

const Users: React.FC<PropsType> = ({users, totalUsersCount, pageSize, currentPage, onPageChanged, portionSize,...props}) => {

    return <div>
        <Paginator portionSize={portionSize}
                   totalItemsCount={totalUsersCount}
                   pageSize={pageSize}
                   currentPage={currentPage}
                   onPageChanged={onPageChanged}
        />
        <div>
            {
                users.map(u => <User key={u.id}
                                     user={u}
                                     follow={props.follow}
                                     unfollow={props.unfollow}
                                     followingInProgress={props.followingInProgress}
                />)
            }
        </div>
    </div>
};

export default Users;