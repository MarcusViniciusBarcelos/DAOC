import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import './styles.css';

export function Home() {
  const [counted, setCounted] = useState([0, 1, 2, 3, 4]);

  const divRef = useRef();
  useLayoutEffect(() => {
    const now = Date.now();
    while (Date.now() < Date.now() + 1000);
    divRef.current.scrollTop = divRef.current.scrollHeight;
  });

  const handleClick = () => {
    setCounted((c) => [...c, +c.slice(-1) + 1]);
  };

  return (
    <>
      <button onClick={handleClick}>Count {counted.slice(-1)}</button>
      <div
        ref={divRef}
        style={{ height: '100px', width: '100px', overflow: 'scroll' }}
      >
        {counted.map((c) => {
          return <p key={`c-${c}`}>{c}</p>;
        })}
      </div>
    </>
  );
}
