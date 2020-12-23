import axiosClient from "./axiosClient";

const listTestApi = {
    getAll(params) {
        const url = '/list-test';
        return axiosClient.get(url, { params });

    },
    get(id) {
        const url = `/list-test/${id}`;
        return axiosClient.get(url); 
    },
    add(data) {
        const url = '/list-test';
        return axiosClient.post(url, data);
    },
    update(data) {
        const url = '/list-test/';
        return axiosClient.put(url, data);
    },
    remove(id) {
        const url = `/list-test/${id}`;
        return axiosClient.delete(url);
    }
};

export default listTestApi;