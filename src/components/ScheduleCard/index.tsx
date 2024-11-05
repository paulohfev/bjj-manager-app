import ScheduleSendIcon from '@mui/icons-material/ScheduleSend'
import { Card, CardActions, CardContent, CardHeader, CircularProgress, Typography } from '@mui/material'

import dayjs from '@/dates'
import { Schedule } from '@/types/api/Schedule'
import { formatDate } from '@/utils/dates.utils'

import Button from '../Button'
import useScheduleCardController from './useScheduleCardController'

export type ScheduleCardProps = {
  schedule: Schedule
}

const ScheduleCard: React.FC<ScheduleCardProps> = ({ schedule }) => {
  const { areAttendancesLoading, canJoin, handleJoinClick, isAttendanceCreationPending } = useScheduleCardController({
    scheduleId: schedule.id,
  })

  const startTime = dayjs(schedule.startsAt).format('HH:mm')
  const endTime = dayjs(schedule.endsAt).format('HH:mm')

  return (
    <Card>
      <CardHeader
        subheader={`${formatDate(schedule.startsAt)} | ${startTime} - ${endTime}`}
        title={schedule.course.name}
      />
      <CardContent>
        <Typography>Students: 0/10</Typography>
      </CardContent>
      <CardActions>
        {areAttendancesLoading ? (
          <CircularProgress size={24} />
        ) : canJoin ? (
          <Button disabled={isAttendanceCreationPending} onClick={() => handleJoinClick()} variant='contained'>
            {isAttendanceCreationPending ? <CircularProgress size={24} /> : <Typography>Join</Typography>}
          </Button>
        ) : (
          <ScheduleSendIcon />
        )}
      </CardActions>
    </Card>
  )
}

export default ScheduleCard
