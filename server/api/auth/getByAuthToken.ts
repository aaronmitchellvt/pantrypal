import { getCookie } from 'h3'
import { getUserBySessionToken } from '~~/server/services/sessionService'
import { IUser } from '~~/types/IUser'

export default defineEventHandler(async (event) => {
  const authToken = getCookie(event, 'auth_token')  

  if(!authToken) {
    return null
  }

  const user  = await getUserBySessionToken(authToken)
  return user
})