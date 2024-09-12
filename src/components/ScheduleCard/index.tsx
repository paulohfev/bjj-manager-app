import { Card, CardActions, CardContent, CardHeader, Typography } from '@mui/material'

import { Schedule } from '@/types/api/Schedule'
import { formatDate } from '@/utils/dates.utils'

import Button from '../Button'

export type ScheduleCardProps = {
  schedule: Schedule
}

// @TODO: add join functionality and students count
const ScheduleCard: React.FC<ScheduleCardProps> = ({ schedule }) => {
  return (
    <Card>
      <CardHeader subheader={formatDate(schedule.startsAt)} title={schedule.course.name} />
      <CardContent>
        <Typography>Students: 0/10</Typography>
      </CardContent>
      <CardActions>
        <Button>
          <Typography>Join</Typography>
        </Button>
      </CardActions>
    </Card>
  )
}

export default ScheduleCard
