import { useEffect, useRef, useState } from 'react';
import './styles.css';

const isObjectEqual = (objA, objB) => {
  return JSON.stringify(objA) === JSON.stringify(objB);
};

const useFetch = (url, options) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const urlRef = useRef(url);
  const optionsRef = useRef(options);

  useEffect(() => {
    let changed = false;

    if (!isObjectEqual(url, urlRef.current)) {
      urlRef.current = url;
      changed = true;
    }
    if (!isObjectEqual(options, optionsRef.current)) {
      optionsRef.current = options;
      changed = true;
    }
    if (changed) {
      setShouldLoad((s) => !s);
    }
  }, [url, options]);

  useEffect(() => {
    let wait = false;
    console.log(optionsRef.current.headers);
    setLoading(true);

    const fetchData = async () => {
      await new Promise((r) => setTimeout(r, 1000));
      try {
        const response = await fetch(urlRef.current, optionsRef.current);
        const jsonResult = await response.json();
        if (!wait) {
          setResult(jsonResult);
          setLoading(false);
        }
      } catch (error) {
        if (!wait) {
          setLoading(false);
        }
        throw error;
      }
    };

    fetchData();

    return () => {
      wait = true;
    };
  }, [shouldLoad]);

  return [result, loading];
};

export function Home() {
  const [postId, setPostId] = useState('');
  const [result, loading] = useFetch(
    'https://jsonplaceholder.typicode.com/posts/' + postId,
    {
      headers: {
        postId: postId,
      },
    },
  );

  useEffect(() => {
    console.log('postId:', postId);
  }, [postId]);

  if (loading) return <h1>Loading...</h1>;

  const handleClick = (id) => {
    setPostId(id);
  };

  if (!loading && result) {
    return (
      <div>
        {result?.length > 0 ? (
          result.map((item) => (
            <div key={item.id} onClick={() => handleClick(item.id)}>
              <h1>{item.title}</h1>
              <p>{item.body}</p>
            </div>
          ))
        ) : (
          <div onClick={() => handleClick('')}>
            <h1>{result.title}</h1>
            <p>{result.body}</p>
          </div>
        )}
        {result?.length === 0 && <h1>Nenhum resultado encontrado</h1>}
      </div>
    );
  }

  return <h1>oi</h1>;
}
