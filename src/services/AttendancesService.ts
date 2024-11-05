import bjjManagerApiClient from '@/clients/bjjManagerApiClient'
import { API_ENDPOINTS } from '@/constants/apiEndpoints'
import { Attendance } from '@/types/api/Attendance'

export const createAttendance = async (scheduleId: string, userId: string) => {
  const response = await bjjManagerApiClient.post(API_ENDPOINTS.attendances, { scheduleId, userId })

  return response.data
}

export const getAttendancesByUserAndSchedule = async (userId?: string, scheduleId?: string): Promise<Attendance[]> => {
  const response = await bjjManagerApiClient.get(API_ENDPOINTS.attendances, { params: { userId, scheduleId } })

  return response.data
}
