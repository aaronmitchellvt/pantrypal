import { IUser } from "~~/types/IUser";
import { ISession } from "~~/types/ISession";
import prisma from "../client";

export async function createSession(sessionData: ISession): Promise<ISession> {

  if (!sessionData.authToken) {
    throw Error('missing auth token for session')
  }
  return await prisma.session.create({
    data: {
      userId: sessionData.userId,
      authToken: sessionData.authToken
    },
  })
}

export async function getSessionByAuthToken(authToken: string) {
  const user: IUser = await getUserByAuthToken(authToken) as any as IUser;
  return { authToken, user }
}

export async function getUserByAuthToken(authToken: string) {
  return prisma.session.findUnique({
    where: {
      authToken: authToken
    }
  }).user()
}