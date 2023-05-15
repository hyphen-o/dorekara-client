import { authApi } from '@/api/routes/AuthApi'

export const authUtils = {
  isAuthenticated: async () => {
    try {
      if (localStorage.getItem('token')) {
        const res = await authApi.me(localStorage.getItem('token'))
        if (res.data.user) return res.data.user
      }
  
      return false
    } catch (e) {
      localStorage.removeItem('token')
      return false
    }
  },
}
