import { Grid } from '@mui/material'

import Calendar from '../Calendar'
import ClassesList from '../ClassesList'

const ClassManager: React.FC = () => {
  return (
    <Grid container columnSpacing={2}>
      <Grid item xs={6}>
        <Calendar />
      </Grid>

      <Grid item xs={6}>
        <ClassesList />
      </Grid>
    </Grid>
  )
}

export default ClassManager
