import axiosClient from "../axiosClient";

export const InformationAPI = {
    get: (id) => {
        const url = `${id}/information`;
        return axiosClient.get(url);
    },
    update: (id, value) => {
        const url = `${id}/information/update`;
        return axiosClient.put(url, value);
    },
    changePassword: (id, value) => {
        const url = `${id}/updatePassword`;
        return axiosClient.put(url, value);
    }
}