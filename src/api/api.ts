import axios, {AxiosResponse} from 'axios';
import {UserType} from '../redux/users-reducer';
import {ProfileType} from '../components/Profile/ProfileContainer';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'ee7769c8-821f-475b-be91-ea9e1f4fc86c'
    }
});

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data;
        })
    },
    follow(userId: number) {
        return instance.post<'', AxiosResponse<UserType>>(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete<'', AxiosResponse<UserType>>(`follow/${userId}`)
    },
    getProfile(userId: number | null) {
        console.log('Obsolete method. Please use profileAPI object.')
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId: number | null) {
        return instance.get(`profile/` + userId);
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status});
    },
    savePhoto(photoFile: string) {
        const formData = new FormData();
        formData.append('image', photoFile)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile: ProfileType | null){
        return instance.put(`profile`, profile);
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    logout() {
        return instance.delete(`auth/login`);
    },
}