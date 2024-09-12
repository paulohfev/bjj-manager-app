import { DateFormat } from '@/constants/dateFormats'

import dayjs from '../dates'

export const formatDate = (date: string): string => {
  return dayjs(date).format(DateFormat.DD_MM_YYYY_slash)
}
