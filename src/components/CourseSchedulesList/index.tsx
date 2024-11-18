import { Box, Typography } from '@mui/material'

import ScheduleCard from '../ScheduleCard'
import styles from './styles'
import useCourseSchedulesListController from './useCourseSchedulesListController'

const CoursesList: React.FC = () => {
  const { isLoading, schedules } = useCourseSchedulesListController()

  return (
    <Box sx={styles.container}>
      {isLoading ? (
        <Typography>Loading...</Typography>
      ) : schedules?.length === 0 ? (
        <Typography>No schedules found</Typography>
      ) : (
        schedules?.map((schedule) => <ScheduleCard key={schedule.id} schedule={schedule} />)
      )}
    </Box>
  )
}

export default CoursesList