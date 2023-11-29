import axiosClient from "../axiosClient";

export const LoginAPI = {
    post: (value) => {
        const url = `/login`;
        return axiosClient.post(value);
    }
}