import axios from 'axios'
import https from 'https'

export const axiosClient = (token = null, contentType = 'application/json') =>
  axios.create({
    baseURL:
      'http://www.dorekara.com/api',
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
