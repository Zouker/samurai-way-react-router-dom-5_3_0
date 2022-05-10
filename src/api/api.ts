import axios from 'axios';

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
    postUser(id: number) {
        return instance.post(`follow/${id}`).then(response => {
            if (response.data.resultCode === 0) {
                return response
            }
        })
    },
    deleteUser(id: number) {
        return instance.delete(`follow/${id}`).then(response => {
            if (response.data.resultCode === 0) {
                return response
            }
        })
    },
}