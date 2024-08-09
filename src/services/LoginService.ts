import axios from 'axios'

import { API_ENDPOINTS } from '@/constants/apiEndpoints'
import { Login } from '@/types/api/Login'

const bjjManagerApiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BJJ_MANAGER_API_URL,
})

export const login = async (params: Login) => {
  const response = await bjjManagerApiClient.post(API_ENDPOINTS.login, params)
  return response.data
}
