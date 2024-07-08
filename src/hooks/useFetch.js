import { useState, useEffect } from "react";

export const useFetch = (url, method = "GET") => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState(null);

  //this is for refetch
  const [timestamp, setTimestamp] = useState(Date.now()); // Use timestamp to force refetch


  const postData = (postData) => {
    setOptions({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
  };

  const putData = (putData) => {
    setOptions({
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(putData),
    });
  };
  const refetch = () => {
    console.log('Refetching data...');

  };

  useEffect(() => {
    console.log(`useFetch ran with url: ${url}, method: ${method}, options: ${JSON.stringify(options)}`);

    const controller = new AbortController();

    const fetchData = async (fetchOptions) => {
      setIsPending(true);

      try {
        const res = await fetch(url, { ...fetchOptions, signal: controller.signal });// Include options in fetch call, default to GET
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const data = await res.json();

        setData(data);
        setIsPending(false);
        setError(null);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("The fetch was aborted");
        } else {
          setIsPending(false);
          setError("Could not fetch the data");
        }
      }
    };


    if (method === "GET") {
      fetchData();
    } else if ((method === "POST" || method === "PUT") && options) {
      fetchData(options);
    }

    return () => {
      controller.abort();
    };
  }, [url, options, method, timestamp]); // Include timestamp as a dependency --for refetch

  return { data, isPending, error, postData, putData, refetch}; //added refetch
};
