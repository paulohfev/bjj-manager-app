import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'

import { APP_ROUTES } from '@/constants/appRoutes'
import { LoginForm } from '@/types/LoginForm'
import { Login } from '@/types/api/Login'

const useLoginController = () => {
  const router = useRouter()
  const formMethods = useForm<LoginForm>()
  const { handleSubmit } = formMethods

  const { mutate } = useMutation({
    mutationFn: async (params: Login) => {
      await signIn('credentials', {
        email: params.email,
        password: params.password,
        redirect: false,
      })
    },
    onSuccess: () => {
      router.push(APP_ROUTES.root)
    },
  })

  const onSubmit = handleSubmit((data) => mutate(data))

  return {
    formMethods,
    onSubmit,
  }
}

export default useLoginController
