import { axiosClient } from '@/api/axiosClient'

export const authApi = {
  register: (params) => axiosClient(null).post('register', params),
  login: (params) => axiosClient(null).post('login', params),
  logout: (token) => axiosClient(token).post('logout'),
  destroy: (params) => axiosClient(null).delete('destroy', { params }),
  me: (token) => axiosClient(token).get('me'),
}
