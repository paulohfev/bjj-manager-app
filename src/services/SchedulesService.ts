import bjjManagerApiClient from '@/clients/bjjManagerApiClient'
import { API_ENDPOINTS } from '@/constants/apiEndpoints'
import { Schedule } from '@/types/api/Schedule'

export const getSchedules = async (date: string): Promise<Schedule[]> => {
  const response = await bjjManagerApiClient.get(API_ENDPOINTS.schedules, { params: { date } })

  return response.data
}
