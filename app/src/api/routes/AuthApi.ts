import {axiosClient} from "@/api/axiosClient";

export const authApi = {
    register: (params) => axiosClient.post('register', params),
    login: (params) => axiosClient.post("login", params),
}