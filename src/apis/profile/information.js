import axiosClient from "../axiosClient";

export const InformationAPI = {
    // dieu chinh ham nay de get
    get: (id) => {
        const url = `/employee/${id}`;
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