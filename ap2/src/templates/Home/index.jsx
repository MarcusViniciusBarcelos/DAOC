import P from 'prop-types';
import { useEffect, useMemo, useRef, useState } from 'react';
import './styles.css';

export const Post = ({ post, handleClick }) => {
  console.log('Filho renderizou');
  return (
    <div key={post.id} className="post">
      <h1 onClick={() => handleClick(post.title)}>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

Post.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
  handleClick: P.func,
};
export function Home() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  const input = useRef(null);
  const contador = useRef(0);

  const handleClick = (value) => {
    setValue(value);
  };

  console.log('Pai renderizou');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((r) => r.json())
      .then((r) => setPosts(r));
  }, []);

  useEffect(() => {
    console.log(input.current);
    input.current.focus();
  }, [value]);

  useEffect(() => {
    contador.current++;
  }, []);
  return (
    <div className="home">
      <h1>Renderizou: {contador.current} vezes</h1>
      <p>
        <input
          ref={input}
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </p>
      {useMemo(() => {
        return (
          posts.length > 0 &&
          posts.map((post) => (
            <Post key={post.id} post={post} handleClick={handleClick} />
          ))
        );
      }, [posts])}
      {posts.length <= 0 && (
        <div className="post">
          <h1>Carregando...</h1>
        </div>
      )}
    </div>
  );
}
