import useSWR from "swr";


const fetcher = url => fetch(url).then(r => r.json())

export default function useUser(username:string) {
  const url = `http://localhost:3000/api/information?email=${username}`;
  
  const { data, mutate, error } = useSWR(url,fetcher);

  if (error) {
    console.error("Error:", error);
  }
  console.log(data);
  const loading = !data && !error;
  const loggedOut = error && error.status === 403;

  return {
    loading,
    loggedOut,
    user: data,
    mutate
  };
}
