import axios from 'axios'
import https from 'https'

export const axiosClient = (token, contentType = 'application/json') =>
  axios.create({
    baseURL:
      'http://ec2-43-206-130-36.ap-northeast-1.compute.amazonaws.com/api',
    headers: {
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${token}`,
    },
    httpsAgent: new https.Agent({
      rejectUnauthorized: false,
    }),
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
