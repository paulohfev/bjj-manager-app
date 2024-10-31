import { Grid } from '@mui/material'

import Calendar from '../Calendar'
import CourseSchedulesList from '../CourseSchedulesList'

const CourseManager: React.FC = () => {
  return (
    <Grid container columnSpacing={2}>
      <Grid item xs={6}>
        <Calendar />
      </Grid>

      <Grid item xs={6}>
        <CourseSchedulesList />
      </Grid>
    </Grid>
  )
}

export default CourseManager
