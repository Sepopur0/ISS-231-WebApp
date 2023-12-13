import axiosClient from "../axiosClient";

export const LoginAPI = {
    post: (value) => {
        const url = `/login`;
        return axiosClient.post(value);
    },
    get: (id) => {
        const url = `/employee/login/${id}`;
        return axiosClient.get(id);
    }
}

export const GetInfoAPI = {
    get: (id) => {
        const url = `/employee/${id}`;
        return axiosClient.get(id);
    }
}