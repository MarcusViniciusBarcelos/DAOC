import { useState } from 'react';
import './styles.css';
import { useFetch } from './use-fetch';

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
