import { useCallback, useState } from 'react';

export function useFetch(url, uri) {
  const [data, setData] = useState([]);
  const request = useCallback(async () => {
    const response = await fetch(`${url}/${uri}`);
    const json = await response.json();
    return json;
  }, []);

  return { data, setData, request };
}
