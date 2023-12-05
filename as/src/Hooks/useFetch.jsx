import { useCallback, useState } from 'react';

export function useFetch(url, uri) {
  const [data, setData] = useState([]);

  const request = useCallback(async () => {
    try {
      const response = await fetch(`${url}/${uri}`);
      const json = await response.json();
      setData(Array.isArray(json) ? json : []);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  }, []);

  return { data, request };
}
