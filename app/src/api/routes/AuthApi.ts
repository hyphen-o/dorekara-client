import { axiosClient } from '@/api/axiosClient'

export const authApi = {
  register: (params) => axiosClient(null).post('register', params),
  login: (params) => axiosClient(null).post('login', params),
  destroy: (params) => axiosClient(null).delete('destroy', {params}),
  me: (token) => axiosClient(token).get('me'),
}
