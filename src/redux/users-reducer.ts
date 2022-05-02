import {ActionsTypes} from './store';

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'


export type UserType = {
    id: number
    photos: { small: string }
    followed: boolean
    name: string
    status: string
    location: UserLocationType
}

type UserLocationType = {
    city: string
    country: string
}

let initialState: initialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
}

export type initialStateType = {
    users: Array<UserType>,
    pageSize: number
    totalUsersCount: number,
    currentPage: number,
}

const usersReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state, users: action.users
            }
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case 'SET_TOTAL_USERS_COUNT':
            return {...state, totalUsersCount: action.totalUsersCount}
        default:
            return state;
    }
}

export type ActionsUsersTypes =
    ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setUsersTotalCountAC>

export const followAC = (userId: number) => {
    return {
        type: FOLLOW,
        userId
    } as const
}

export const unfollowAC = (userId: number) => {
    return {
        type: UNFOLLOW,
        userId
    } as const
}

export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: SET_USERS,
        users
    } as const
}

export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    } as const
}

export const setUsersTotalCountAC = (totalUsersCount: number) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount
    } as const
}

export default usersReducer;