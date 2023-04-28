import axios from 'axios'

export const axiosClient = (token) =>
  axios.create({
    baseURL: 'http://localhost/api/',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${token}`,
    },
  })

axios.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

axios.interceptors.response.use(
  function (response) {
    return response
  },
  (error) => {
    return Promise.reject(error)
  },
)
