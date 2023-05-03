import { axiosClient } from '@/api/axiosClient'

export const songApi = {
  getAll: (user_id) => axiosClient(null).get(`song/${user_id}/all`),
  getOne: (song_id) => axiosClient(null).get(`song/${song_id}`),
  destroy: (params) => axiosClient(null).delete(`song/destroy`, { params }),
  create: (user_id, params) =>
    axiosClient(null).post(`song/${user_id}/create`, params),
  edit: (user_id, params) =>
    axiosClient(null).put(`song/${user_id}/edit`, params),
}
