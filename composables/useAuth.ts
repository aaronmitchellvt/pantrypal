import { ISession } from "~~/types/ISession";
import { IUser } from "~~/types/IUser";
import { useRouter, useState } from "#app";


export const useAuthCookie = () => useCookie("auth_token");
export async function useUser(): Promise<IUser | null> {
  const authCookie = useAuthCookie().value;
  const user = useState<IUser | null>("user");

  if (authCookie && !user.value) {
    const cookieHeaders = useRequestHeaders(["cookie"]);

    const { data } = await useFetch<IUser>(`/api/auth/getByAuthToken`, {
      headers: cookieHeaders as HeadersInit,
    });

    user.value = data.value;
  }

  return user.value;
}

export async function registerWithEmail(
  firstName: string,
  lastName: string,
  email: string,
  password: string
) {
  try {
    const res = await $fetch<ISession>("/api/auth/register", {
      method: "POST",
      body: { firstName, lastName, email, password },
    });
    if (res) {
      console.log("res: ", res);
      useState('user').value = res;
      await useRouter().push("/");
    }
  } catch (e) {
    console.log("error: ", e);
  }
}

export async function userLogout() {
  await useFetch('/api/auth/logout');
  useState('user').value = null;
  await useRouter().push("/");
}

export async function loginWithEmail(email: string, password: string) {
  const user = await $fetch<IUser>('/api/auth/login', {
    method: 'POST',
    body: {
      email: email,
      password: password
    }
  })
  useState('user').value = user
  await useRouter().push("/");
}

export async function useLoggedIn() {
  const user = await useUser()

  if (!user) {
    return false
  }

  if (user?.id == null) {
    return false
  }

  return true
}
