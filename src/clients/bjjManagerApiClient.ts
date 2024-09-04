import axios from 'axios'

const bjjManagerApiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BJJ_MANAGER_API_URL,
})

export default bjjManagerApiClient
