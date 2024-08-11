import bjjManagerApiClient from '@/clients/bjjManagerApiClient'
import { API_ENDPOINTS } from '@/constants/apiEndpoints'
import { Login } from '@/types/api/Login'
import { LoginResponse } from '@/types/api/LoginResponse'

export const login = async (params: Login): Promise<LoginResponse> => {
  const response = await bjjManagerApiClient.post(API_ENDPOINTS.login, params)
  return response.data
}
