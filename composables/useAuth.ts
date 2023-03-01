import { ISession } from "~~/types/ISession"

export async function registerWithEmail(firstName: string, lastName: string, email: string, password: string) {
  try {
    const res = await $fetch<ISession>('/api/auth/register', {
      method: 'POST',
      body: { firstName, lastName, email, password }
    })
    if (res) {
      useState('user').value = res
      await useRouter().push('/')
    }
  } catch (e) {
    console.log("error: ", e)
  }
}