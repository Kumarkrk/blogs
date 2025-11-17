import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [blogs, setblogs] = useState([]);
  const [ispending, setIspending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then(res => {
          if (!res.ok) throw Error("Data could not be fetched");
          return res.json();
        })
        .then(data => {
          setblogs(data.blogs);  // <-- make sure it's an array
          setIspending(false);
          setError(null);
        })
        .catch(err => {
          setIspending(false);
          setError(err.message);
        });
    }, 1000);
  }, [url]);

  return { blogs, ispending, error };
};

export default useFetch;
