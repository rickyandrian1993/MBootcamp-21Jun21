import { useState, useEffect } from "react";

const useFetchUsers = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch("https://randomuser.me/api/?results=20")
    .then(response => response.json())
    .then(data => {
      setDatas(data.results)
    })
    .catch(err => setError(err))
    .finally(() => setLoading(false));
  }, []);

  return { loading, error, datas };
}

export default useFetchUsers;