import React, { useState, useEffect } from "react";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [hasError, setHasError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setHasError(false);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }
        const json = await response.json();
        setData(json);
      } catch (error) {
        setErrorMsg(error.message);
        setHasError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return { data, loading, errorMsg, hasError };
};
export default useFetch;
