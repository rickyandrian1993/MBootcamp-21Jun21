import { useEffect, useState } from "react"

const useFetctAnimes = () => {
  const [datas, setDatas] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    fetch("https://api.jikan.moe/v3/search/anime?q=anime&limit=20")
    .then(response => response.json())
    .then(data => setDatas(data.results))
    .catch(err => setError(err))
    .finally(() => setLoading(false))
  }, []);

  return { datas, error, loading };
}

export default useFetctAnimes