'use server'
import useSWR from "swr";

import userFetcher from "../libs/auth/api_auth";



const fetcher = (url: string) => fetch(url).then(r => r.json())

export default function useUser() {
  const { data, mutate, error } = useSWR("/src/app/API/login/loginDB.tsx", fetcher);

  const loading = !data && !error;
  const loggedOut = error && error.status === 403;

  return {
    loading,
    loggedOut,
    user: data,
    mutate
  };
}
