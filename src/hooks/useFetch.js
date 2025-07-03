import { useEffect, useState } from "react";

export function useFetch(url) {
  const [loading, setLoading] = useState(true);

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((data) => data.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [url]);
  return { data, loading };
}

//"https://dummyjson.com/products?limit=194"
