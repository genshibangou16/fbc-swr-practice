import "./App.css";
import useSWR from "swr";

function App() {
  const url = "https://httpstat.us/200?sleep=2000";
  const headers = { Accept: "application/json" };

  const fetcher = (url) =>
    fetch(url, { headers })
      .then((res) => res.json())
      .then((data) => data.description);

  const { data: status, error, isLoading } = useSWR(url, fetcher);

  if (error) return <p>failed to load</p>;
  if (isLoading) return <p>loading...</p>;

  return <>{status && <p>Status : {status}</p>}</>;
}

export default App;
