import { getUserByEmail } from "../database/repositories/userRepository";

type ExistsCheck = {
  value: boolean
  message?: string
};

type RegistrationErrors = {
  emailError?: string
}

export async function doesUserExist(email: string): Promise<ExistsCheck> {
  const hasEmail = await getUserByEmail(email);
  const emailExists: boolean = hasEmail !== null;

  const errors: RegistrationErrors = {}
  if (emailExists) {
    errors.emailError = `This email, ${email}, is already in use`
    return {
      value: true,
      message: JSON.stringify(errors)
    }
  }

  return { value: false }
}