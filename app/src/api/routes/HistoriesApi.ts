import { axiosClient } from '@/api/axiosClient'

export const historyApi = {
  getDates: (user_id) => axiosClient(null).get(`history/${user_id}/all`),
  getSongs: (user_id, params) =>
    axiosClient(null).get(`history/${user_id}/songs`, { params }),
  create: (user_id, params) => axiosClient(null).post(`history/${user_id}/create`, params),
  destroy: (params) => axiosClient(null).delete('history/destroy', { params }),
}
