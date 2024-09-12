import { Box, Card, CardActions, CardContent, CardHeader, Typography } from '@mui/material'

import styles from './styles'
import Button from '../Button'

const ClassesList: React.FC = () => {
  return (
    <Box sx={styles.container}>
      <Card>
        <CardHeader subheader="17:30" title="Beginner" />
        <CardContent>
          <Typography>Class description</Typography>
        </CardContent>
        <CardActions>
          <Button>
            <Typography>Join</Typography>
          </Button>
        </CardActions>
      </Card>

      <Card>
        <CardHeader subheader="18:30" title="Advanced" />
        <CardContent>
          <Typography>Class description</Typography>
        </CardContent>
        <CardActions>
          <Button>
            <Typography>Join</Typography>
          </Button>
        </CardActions>
      </Card>
    </Box>
  )
}

export default ClassesList
