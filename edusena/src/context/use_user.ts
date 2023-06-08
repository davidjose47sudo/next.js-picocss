import useSWR from "swr";



export default function useUser(username:string) {
  const fetcher =(url:string) => fetch(url).then(r => r.json())
  const url = `http://localhost:3000/api/information?email=${username}`;
  
  const { data, mutate, error } = useSWR(url,fetcher);

  if (error) {
    console.error("Error:", error);
  }

  const loading = !data && !error;
  const loggedOut = error && error.status === 403;

  return {
    loading,
    loggedOut,
    user: data,
    mutate
  };
}
