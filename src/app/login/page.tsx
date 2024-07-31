'use client'

import { Box } from '@mui/material'

import { FormProvider } from 'react-hook-form'

import { InputSize } from '@/constants/inputSettings'

import Button from '../_presenter/components/Button'
import TextFieldController from '../_presenter/components/FormControllers/TextFieldController'
import { TextFieldType } from '../_presenter/components/TextField'
import useLoginController from './_controllers/useLoginController'
import styles from './styles'

const LoginPage: React.FC = () => {
  const { formMethods, onSubmit } = useLoginController()

  return (
    <FormProvider {...formMethods}>
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

        <Button type='submit'>Login</Button>
      </Box>
    </FormProvider>
  )
}

export default LoginPage
