import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'

import { login } from '@/services/LoginService'
import { LoginForm } from '@/types/LoginForm'
import { Login } from '@/types/api/Login'

const useLoginController = () => {
  const formMethods = useForm<LoginForm>()
  const { handleSubmit } = formMethods

  const { mutate } = useMutation({
    mutationFn: async (params: Login) => {
      await login(params)
    },
    onSuccess: () => {
      console.log('Login Success')
    },
  })

  const onSubmit = handleSubmit((data) => mutate(data))

  return {
    formMethods,
    onSubmit,
  }
}

export default useLoginController
