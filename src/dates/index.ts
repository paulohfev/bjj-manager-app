import dayjs from 'dayjs'
import localeData from 'dayjs/plugin/localeData'

export type { Dayjs } from 'dayjs'

dayjs.extend(localeData)

export default dayjs
