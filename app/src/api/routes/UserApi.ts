import {axiosClient} from "@/api/axiosClient";

export const userApi = {
    getImage: (id) => axiosClient(null).get(`image/${id}`),
}