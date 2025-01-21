import axios from 'axios'
import CONFIG from '@/configs/appSetting'
const instance = axios.create({
  baseURL: CONFIG.BASE_URL,
  headers: {
    post: {
      'Content-Type': 'application/json',
    },
    common: {
      Authorization: 'brear token',
    },
  },
})
export default instance
