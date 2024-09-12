import bjjManagerApiClient from '@/clients/bjjManagerApiClient'
import { API_ENDPOINTS } from '@/constants/apiEndpoints'
import { Schedule } from '@/types/api/Schedule'

export const getSchedules = async (date: string): Promise<Schedule[]> => {
  const apiURL = `${API_ENDPOINTS.schedules}?date=${date}`

  const response = await bjjManagerApiClient.get(apiURL)
  return response.data
}
