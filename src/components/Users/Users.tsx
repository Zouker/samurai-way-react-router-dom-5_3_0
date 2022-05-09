import React from 'react';
import styles from './users.module.css';
import userPhoto from '../../assets/images/user.png';
import {UserType} from '../../redux/users-reducer';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

type PropsType = {
    users: Array<UserType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

const Users: React.FC<PropsType> = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages: number[] = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span key={p} className={props.currentPage === p ? styles.selectedPage : ''}
                                 onClick={() => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })}
            </div>
            {
                props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} alt={`user's avatar`}
                             className={styles.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {

                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': 'ee7769c8-821f-475b-be91-ea9e1f4fc86c'
                                    }
                                }).then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unfollow(u.id)
                                    }
                                });
                            }}>Unfollow</button>
                            : <button onClick={() => {

                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': 'ee7769c8-821f-475b-be91-ea9e1f4fc86c'
                                    }
                                }).then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(u.id)
                                    }
                                });
                            }}>Follow</button>}
                                </div>
                                </span>
                    <span>
                                <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                                </span>
                                <span>
                                <div>{'u.location.country'}</div>
                                <div>{'u.location.city'}</div>
                                </span>
                                </span>
                </div>)
            }
        </div>
    );
};

export default Users;