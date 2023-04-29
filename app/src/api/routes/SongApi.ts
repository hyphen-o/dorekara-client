import { axiosClient } from '@/api/axiosClient'

export const songApi = {
  getAll: (user_id) => axiosClient(null).get(`song/${user_id}/all`),
}
