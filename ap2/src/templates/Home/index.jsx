import { Posts } from '../../components/Posts';

import { PostsProvider } from '../../contexts/PostsProvider';
import './styles.css';

export function Home() {
  return (
    <PostsProvider>
      <div>
        <Posts />
      </div>
    </PostsProvider>
  );
}
