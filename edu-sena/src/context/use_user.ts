'use server'
import useSWR from "swr";

import userFetcher from "../libs/auth/api_auth";

export default function useUser() {
  const { data, mutate, error } = useSWR("api_auth", userFetcher);

  const loading = !data && !error;
  const loggedOut = error && error.status === 403;

  return {
    loading,
    loggedOut,
    user: data,
    mutate
  };
}
