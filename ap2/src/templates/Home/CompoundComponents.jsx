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

const s = {
  style: {
    fontSize: '60px',
  },
};

const TurnOnOff = ({ children }) => {
  const [isOn, setIsOn] = useState(false);
  const onTurn = () => setIsOn((s) => !s);

  return Children.map(children, (child) => {
    const newChild = cloneElement(child, {
      isOn,
      onTurn,
    });
    return newChild;
  });
};
const TurnedOn = ({ isOn, children }) => (isOn ? children : null);

const TurnedOff = ({ isOn, children }) => (isOn ? null : children);

const TurnButton = ({ isOn, onTurn }) => {
  return <button onClick={onTurn}>Turn {isOn ? 'OFF' : 'ON'}</button>;
};

export function CompoundComponents() {
  return (
    <TurnOnOff>
      <TurnedOn>oi on</TurnedOn>
      <TurnedOff>oi off</TurnedOff>
      <TurnButton />
    </TurnOnOff>
  );
}

TurnButton.propTypes = {
  isOn: PropTypes.bool.isRequired,
  onTurn: PropTypes.node.isRequired,
};

TurnedOn.propTypes = {
  isOn: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

TurnedOff.propTypes = {
  isOn: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};
