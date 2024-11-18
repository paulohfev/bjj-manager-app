import { AuthSession } from '@/types/CustomAuth'
import axios from 'axios'
import { getSession } from 'next-auth/react'


const bjjManagerApiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BJJ_MANAGER_API_URL,
})

bjjManagerApiClient.interceptors.request.use(async (config) => {
  const session = await getSession() as AuthSession

  if (session?.accessToken) {
    config.headers.Authorization = `Bearer ${session.accessToken}`
  }

  return config
})

export default bjjManagerApiClient
