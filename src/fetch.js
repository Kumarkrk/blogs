import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [blogs, setblogs] = useState(null);
  const [ispending, setIspending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => {
        if (!res.ok) throw Error("Data could not be fetched");
        return res.json();
      })
      .then(data => {
        setblogs(data.blogs);
        setIspending(false);
      })
      .catch(err => {
        setError(err.message);
        setIspending(false);
      });
  }, [url]);

  return { blogs, ispending, error };
};

export default useFetch;
