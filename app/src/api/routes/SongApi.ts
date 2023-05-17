import { axiosClient } from '@/api/axiosClient'

export const songApi = {
  getAll: (user_id) => axiosClient().get(`song/${user_id}/all`),
  getOne: (song_id) => axiosClient().get(`song/${song_id}`),
  destroy: (params) => axiosClient().delete(`song/destroy`, { params }),
  create: (user_id, params) =>
    axiosClient().post(`song/${user_id}/create`, params),
  edit: (user_id, params) =>
    axiosClient().put(`song/${user_id}/edit`, params),
}
