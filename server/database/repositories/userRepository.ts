import prisma from "../client";
import { IUser } from "~~/types/IUser";

export async function getUserByEmail(email: string) {
  const user = await prisma.user.findUnique({
    where: {
      email: email
    },
    select: {
      id: true,
      firstName: true,
      password: true
    },
  })
  return user;
}

export async function createUser(data: IUser) {
  const user = await prisma.user.create({
    data: {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password
    }
  })
  return user;
}
