import {
  useCallback,
  useDebugValue,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import './styles.css';

const useMediaQuery = (queryValue, initialValue = false) => {
  const [match, setMatch] = useState(initialValue);

  useDebugValue(match ? 'match' : 'no match');

  useEffect(() => {
    let isMounted = true;
    const mathMedia = window.matchMedia(queryValue);

    const handleChange = () => {
      if (!isMounted) return;
      setMatch(!!mathMedia.matches);
    };

    mathMedia.addEventListener('change', handleChange);
    setMatch(!!mathMedia.matches);

    return () => {
      isMounted = false;
      mathMedia.removeEventListener('change', handleChange);
    };
  }, [queryValue]);

  return match;
};

export function Home() {
  const huge = useMediaQuery('(min-width: 600px)');
  const background = huge ? 'green' : 'red';
  return <h1 style={{ background }}>oi</h1>;
}
