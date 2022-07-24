import { RootStateType} from './redux-store';
import {usersAPI} from '../api/api';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {Action, AnyAction} from 'redux';
import {updateObjectInArray} from '../utils/object-helpers';
import {AxiosResponse} from 'axios';

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

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
    isFetching: true,
    followingInProgress: [],
    portionSize: 10
}

export type initialStateType = {
    users: Array<UserType>,
    pageSize: number
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: number[],
    portionSize: number
}

const usersReducer = (state: initialStateType = initialState, action: ActionsUsersTypes): initialStateType => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
            }
        case SET_USERS:
            return {
                ...state, users: action.users
            }
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}

export type ActionsUsersTypes =
    ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowingProgress>

export const followSuccess = (userId: number) => {
    return {
        type: FOLLOW,
        userId
    } as const
}
export const unfollowSuccess = (userId: number) => {
    return {
        type: UNFOLLOW,
        userId
    } as const
}
export const setUsers = (users: Array<UserType>) => {
    return {
        type: SET_USERS,
        users
    } as const
}
export const setCurrentPage = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    } as const
}
export const setTotalUsersCount = (totalUsersCount: number) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount
    } as const
}
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    } as const
}
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching,
        userId,
    } as const
}


export type ThunkType<A extends Action = Action> = ThunkAction<void, RootStateType, unknown, AnyAction | A>
export type ThunkDispatchType = ThunkDispatch<RootStateType, unknown, AnyAction>

export const requestUsers = (page: number, pageSize: number): ThunkType => {
    return async (dispatch: ThunkDispatchType) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));

        const data = await usersAPI.getUsers(page, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
}

const followUnfollowFlow = async (
    dispatch: ThunkDispatchType,
    userId: number,
    apiMethod: (userId: number) => Promise<AxiosResponse>,
    actionCreator: (userId: number) => ReturnType<typeof followSuccess> | ReturnType<typeof unfollowSuccess>
) => {

    dispatch(toggleFollowingProgress(true, userId));
    const response = await apiMethod(userId);

    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId));

}

export const follow = (userId: number): ThunkType => {
    return async (dispatch: ThunkDispatchType) => {
        await followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess);
    }
}
export const unfollow = (userId: number): ThunkType => {
    return async (dispatch: ThunkDispatchType) => {
        await followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess);
    }
}

export default usersReducer;