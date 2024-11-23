import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import { TANSTACK_QUERY_KEYS } from '@/constants/tanstackQueryKeys'
import useSessionUser from '@/hooks/useSessionUser'
import { createAttendance, getAttendancesByUserAndSchedule } from '@/services/AttendancesService'

export type UseScheduleCardControllerProps = {
  scheduleId: string
}

const useScheduleCardController = ({ scheduleId }: UseScheduleCardControllerProps) => {
  const queryClient = useQueryClient()
  const { user } = useSessionUser()

  const createAttendanceMutation = useMutation({
    mutationFn: async () => {
      return await createAttendance(scheduleId, user.id)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [TANSTACK_QUERY_KEYS.attendances, user.id, scheduleId],
      })
    },
  })

  const handleJoinClick = createAttendanceMutation.mutate

  const { data: attendances, isLoading: areAttendancesLoading } = useQuery({
    queryKey: [TANSTACK_QUERY_KEYS.attendances, user.id, scheduleId],
    queryFn: () => getAttendancesByUserAndSchedule(user.id, scheduleId),
    staleTime: Infinity,
  })

  const canJoin = !attendances?.length

  return {
    areAttendancesLoading,
    canJoin,
    handleJoinClick,
    isAttendanceCreationPending: createAttendanceMutation.isPending,
  }
}

export default useScheduleCardController
