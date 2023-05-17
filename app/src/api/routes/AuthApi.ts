import { axiosClient } from '@/api/axiosClient'

export const authApi = {
  register: (params) => axiosClient().post('register', params),
  login: (params) => axiosClient().post('login', params),
  logout: (token) => axiosClient(token).post('logout'),
  destroy: (params) => axiosClient().delete('destroy', { params }),
  me: (token) => axiosClient(token).get('me'),
}
