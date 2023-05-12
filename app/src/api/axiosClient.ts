import axios from 'axios'

export const axiosClient = (token, contentType = 'application/json') =>
  axios.create({
    baseURL:
      'https://ec2-43-206-130-36.ap-northeast-1.compute.amazonaws.com/api',
    headers: {
      'Content-Type': contentType,
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
