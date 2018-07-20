import axios from 'axios'
import env from './env'
import Vue from '../main'

const root = env.API_DEV_PATH
// 全局设置baseURL
axios.defaults.baseURL = root

let loading
// axios请求拦截器
axios.interceptors.request.use((options) => {
  loading = Vue.$loading({
    lock: true
  })
  return options
}, (err) => {
  Vue.$message.error(err.response.data.message)
  return Promise.reject(err)
})

// axios响应拦截器
axios.interceptors.response.use((res) => {
  loading.close()
  if (res.status === 200) return res.data
  return Promise.reject(res)
}, (err) => {
  loading.close()
  const errMsg = err.response ? err.response.data.message : err.message
  Vue.$message.error(errMsg)
  return Promise.reject(err)
})

export default {
  get: (url, config) => axios.get(url, config),
  post: (url, config) => axios.post(url, config),
  put: (url, config) => axios.put(url, config),
  delete: (url, config) => axios.delete(url, config)
}
