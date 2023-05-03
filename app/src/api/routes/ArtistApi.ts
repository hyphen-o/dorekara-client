import { axiosClient } from '@/api/axiosClient'

export const artistApi = {
  getAll: (user_id) => axiosClient(null).get(`artist/${user_id}/all`),
  destroy: (params) => axiosClient(null).delete(`artist/destroy`, { params }),
}
