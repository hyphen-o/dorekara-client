import { axiosClient } from '@/api/axiosClient'

export const artistApi = {
  getAll: (user_id) => axiosClient(null).get(`artist/${user_id}/all`),
  create: (user_id, params) =>
    axiosClient(null).post(`artist/${user_id}/create`, params),
  destroy: (params) => axiosClient(null).delete(`artist/destroy`, { params }),
}
