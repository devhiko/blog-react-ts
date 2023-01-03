import { useEffect, useState } from "react";
import { FetchData } from "./FetchData";

const useFetch = (url: string) => {
  // ! it must be empty array instead null for no blogs

  const [data, setBlogs] = useState<FetchData>([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.log(err.message));
  }, [url]);

  return { data };
};

export default useFetch;
