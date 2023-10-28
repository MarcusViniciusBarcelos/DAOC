import React, { Suspense, useState } from 'react';
import './styles.css';

const loadComponent = () => import('./LazyComponent');
const LazyComponent = React.lazy(loadComponent);

export function Home() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onMouseOver={loadComponent} onClick={() => setShow((s) => !s)}>
        Show
      </button>
      <Suspense fallback={<p>Loading...</p>}>
        {show && <LazyComponent />}
      </Suspense>
    </div>
  );
}
