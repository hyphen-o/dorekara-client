import { axiosClient } from '@/api/axiosClient'

export const historyApi = {
  getDates: (user_id) => axiosClient().get(`history/${user_id}/all`),
  getSongs: (user_id, params) =>
    axiosClient().get(`history/${user_id}/songs`, { params }),
  create: (user_id, params) =>
    axiosClient().post(`history/${user_id}/create`, params),
  destroy: (params) => axiosClient().delete('history/destroy', { params }),
}
