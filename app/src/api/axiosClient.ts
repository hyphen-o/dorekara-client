import axios from 'axios'
import https from 'https'
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

export const axiosClient = (token, contentType = 'application/json') =>
  axios.create({
    baseURL:
      'https://ec2-43-206-130-36.ap-northeast-1.compute.amazonaws.com/api',
    headers: {
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${token}`,
    },
    httpsAgent: new https.Agent({  
      rejectUnauthorized: false
    })
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
