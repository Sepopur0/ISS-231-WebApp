import axiosClient from "../axiosClient";

export const SalaryAPI = {
    get: (id) => {
        const url = `${id}/salary`;
        return axiosClient.get(url);
    }
}