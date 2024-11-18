import { Session, User } from 'next-auth'
import { JWT } from 'next-auth/jwt'

export type AuthToken = JWT & {
  accessToken?: string
}

export type AuthUser = User & {
  token?: string
}

export type AuthSession = Session & {
  accessToken?: string
  user?: AuthUser
}
