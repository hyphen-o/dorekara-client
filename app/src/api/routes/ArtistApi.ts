import { axiosClient } from '@/api/axiosClient'

export const artistApi = {
  getAll: (user_id) => axiosClient().get(`artist/${user_id}/all`),
  getOne: (artist_id) => axiosClient().get(`artist/${artist_id}`),
  create: (user_id, params) =>
    axiosClient().post(`artist/${user_id}/create`, params),
  destroy: (params) => axiosClient().delete(`artist/destroy`, { params }),
}
