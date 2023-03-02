import bcrypt from 'bcrypt'
import { H3Event } from 'h3'
import { getUserByEmail } from '~~/server/database/repositories/userRepository';
import { makeSession } from '~~/server/services/sessionService';

export default async (event: H3Event) => {
  const { email, password } = await readBody(event);
  const user = await getUserByEmail(email);

  if (user === null) {
    sendError(event, createError({ statusCode: 401, statusMessage: "unauthenticated"}));
  }
  const isPasswordCorrect = bcrypt.compare(password, user?.password!);
  if (!isPasswordCorrect) {
    sendError(event, createError({ statusCode: 401, statusMessage: "unauthenticated"}));
  }
  await makeSession(user, event);
  return user;
}