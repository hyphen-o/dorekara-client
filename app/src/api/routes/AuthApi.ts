import { axiosClient } from '@/api/axiosClient'

export const authApi = {
  register: (params) => axiosClient(null).post('register', params),
  login: (params) => axiosClient(null).post('login', params),
  me: (token) => axiosClient(token).get('me'),
}
