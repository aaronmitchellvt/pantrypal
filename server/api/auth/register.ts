import { H3Event, sendError } from 'h3'
import bcrypt from 'bcrypt'
import { IUser } from '~~/types/IUser';
import { doesUserExist } from '~~/server/services/userService';
import { createUser } from '~~/server/database/repositories/userRepository';
import { makeSession } from '~~/server/services/sessionService';

export default eventHandler(async (event: H3Event) => {
  const { firstName, lastName, email, password } = await readBody(event);
  console.log("body: ", firstName);

  const userExists = await doesUserExist(email);
  if (userExists.value) {
    return sendError(event, createError({ statusCode: 422, statusMessage: 'User already exists' }));
  }

  const encryptedPassword: string = await bcrypt.hash(password, 10);
  console.log("encrypted pass: ", encryptedPassword);

  const userData: IUser = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password
  }

  const user = await createUser(userData);
  return await makeSession(user, event);
})