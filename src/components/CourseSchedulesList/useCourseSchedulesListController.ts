import { useQuery } from '@tanstack/react-query'

import { DateFormat } from '@/constants/dateFormats'
import { TANSTACK_QUERY_KEYS } from '@/constants/tanstackQueryKeys'
import { getSchedules } from '@/services/SchedulesService'
import { useDateSelectorStore } from '@/store/dateSelectorStore'

const useCoursesListController = () => {
  const { selectedDate } = useDateSelectorStore()
  const formattedSelectedDate = selectedDate.format(DateFormat.YYYY_MM_DD_hyphen)

  const { data: schedules, isLoading } = useQuery({
    queryKey: [TANSTACK_QUERY_KEYS.schedules, formattedSelectedDate],
    queryFn: () => getSchedules(formattedSelectedDate),
    staleTime: Infinity,
  })

  return {
    schedules,
    isLoading,
  }
}

export default useCoursesListController
