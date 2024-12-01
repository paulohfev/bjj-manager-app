'use client'

import { Box, Grid } from '@mui/material'

import { FormProvider } from 'react-hook-form'

import { InputSize } from '@/constants/inputSettings'

import Button from '../../components/Button'
import TextFieldController from '../../components/FormControllers/TextFieldController'
import { TextFieldType } from '../../components/TextField'
import useLoginController from './_controllers/useLoginController'
import styles from './styles'

const LoginPage: React.FC = () => {
  const { formMethods, isSignInLoading, onSubmit } = useLoginController()

  return (
    <FormProvider {...formMethods}>
      <Grid container sx={styles.gridContainer}>
        <Grid item xs={3}>
          <Box component='form' sx={styles.container} onSubmit={onSubmit}>
            <TextFieldController
              controllerProps={{
                name: 'email',
                control: formMethods.control,
                rules: {
                  required: 'Email is required',
                },
              }}
              label='Email'
              size={InputSize.small}
              type={TextFieldType.email}
            />

            <TextFieldController
              controllerProps={{
                name: 'password',
                control: formMethods.control,
                rules: {
                  required: 'Password is required',
                },
              }}
              label='Password'
              size={InputSize.small}
              type={TextFieldType.password}
            />

            <Button isLoading={isSignInLoading} variant='contained' sx={styles.button} type='submit'>
              Login
            </Button>
          </Box>
        </Grid>
      </Grid>
    </FormProvider>
  )
}

export default LoginPage
