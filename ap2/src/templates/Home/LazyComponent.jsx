import PropTypes from 'prop-types';
import {
  Children,
  cloneElement,
  useCallback,
  useDebugValue,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import './styles.css';

function LazyComponent() {
  return (
    <div>
      <p>LazyComponent</p>
    </div>
  );
}

export default LazyComponent;
