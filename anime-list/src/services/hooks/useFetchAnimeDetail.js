import { useEffect, useState } from "react"

const useFetctAnimeDetail = (id) => {
  const [datas, setDatas] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.jikan.moe/v3/anime/${ id }`)
    .then(response => response.json())
    .then(data => setDatas(data))
    .catch(err => setError(err))
    .finally(() => setLoading(false));
  }, [ id ])

  return { datas, error, loading };
}

export default useFetctAnimeDetail