import PropTypes from 'prop-types';
import React, {
  Children,
  Suspense,
  cloneElement,
  useCallback,
  useDebugValue,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import './styles.css';

const LazyComponent = React.lazy(() => import('./LazyComponent'));

export function Home() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow((s) => !s)}>Show</button>
      <Suspense fallback={<p>Loading...</p>}>
        {show && <LazyComponent />}
      </Suspense>
    </div>
  );
}
