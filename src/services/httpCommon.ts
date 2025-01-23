import axios, {
  AxiosError,
  type AxiosRequestConfig,
  type InternalAxiosRequestConfig,
  type AxiosResponse,
} from 'axios'
import CONFIG from '@/configs/appSetting'
import { ACCESS_TOKEN } from '@/constants/localStorage'
const instance = axios.create({
  baseURL: CONFIG.BASE_URL,
  timeout: CONFIG.REQUEST_TIMEOUT,
})

instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN)
    if (accessToken) {
      config.headers = {
        Authorization: `Bearer ${accessToken}`,
      }
    }
    return config as InternalAxiosRequestConfig
  },
  (error: AxiosError): Promise<void> => {
    return Promise.reject(error)
  },
)
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return handleResponseResolve(response)
    // return response
  },
  (error: AxiosError) => {
    const data = handleResponseReject(error)
    return Promise.reject(data)
    // return Promise.reject(error)
  },
)

const handleResponseResolve = (response: AxiosResponse): AxiosResponse => {
  //  thong bao dang nhap thanh cong
  // neu request api thanh cong data tra ve se co dang :
  // {data,=> day chinh la response fe nhan duoc
  // config,headers,request,status,statusText}
  return response
}

const handleResponseReject = (error: AxiosError): AxiosError => {
  // Axios dataerror mac dinh se co dang {code, config,message,name,request,status,response:{
  // data => day chinh la response fe nhan duoc
  // config,,headers,request,status,statusText
  // }}
  // hien thi loi dua vao status hoac code
  // xu ly refresh token
  return error
}

export default instance
