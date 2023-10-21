import P from 'prop-types';
import { useEffect, useMemo, useState } from 'react';
import './styles.css';

export const Post = ({ post }) => {
  console.log('Filho renderizou');
  return (
    <div key={post.id} className="post">
      <h1>{post.title}</h1>
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
};
export function Home() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');

  console.log('Pai renderizou');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((r) => r.json())
      .then((r) => setPosts(r));
  }, []);
  return (
    <div className="home">
      <p>
        <input
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </p>
      {useMemo(() => {
        return (
          posts.length > 0 &&
          posts.map((post) => <Post key={post.id} post={post} />)
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
