import { axiosClient } from '@/api/axiosClient'

export const userApi = {
  getImage: (id) => axiosClient().get(`image/${id}`),
  uploadImage: (id, params) =>
    axiosClient(
      null,
      'multipart/form-data; boundary=<calculated when request is sent>',
    ).post(`image/${id}`, params),
}
