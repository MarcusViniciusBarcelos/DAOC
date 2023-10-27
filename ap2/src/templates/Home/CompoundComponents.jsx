import PropTypes from 'prop-types';
import { createContext, useContext, useState } from 'react';
import './styles.css';

const s = {
  style: {
    fontSize: '60px',
  },
};

const TurnOnOffContext = createContext();

const TurnOnOff = ({ children }) => {
  const [isOn, setIsOn] = useState(false);
  const onTurn = () => setIsOn((s) => !s);

  return (
    <TurnOnOffContext.Provider value={{ isOn, onTurn }}>
      {children}
    </TurnOnOffContext.Provider>
  );
};
const TurnedOn = ({ children }) => {
  const { isOn } = useContext(TurnOnOffContext);
  return isOn ? children : null;
};

const TurnedOff = ({ children }) => {
  const { isOn } = useContext(TurnOnOffContext);
  return isOn ? null : children;
};

const TurnButton = () => {
  const { isOn, onTurn } = useContext(TurnOnOffContext);
  return <button onClick={onTurn}>Turn {isOn ? 'OFF' : 'ON'}</button>;
};

export function CompoundComponents() {
  return (
    <TurnOnOff>
      <div>
        <TurnedOn>oi on</TurnedOn>
        <TurnedOff>oi off</TurnedOff>
        <TurnButton />
      </div>
    </TurnOnOff>
  );
}

TurnedOn.propTypes = {
  isOn: PropTypes.bool,
  children: PropTypes.node,
};

TurnedOff.propTypes = {
  isOn: PropTypes.bool,
  children: PropTypes.node,
};
TurnOnOff.propTypes = {
  children: PropTypes.node,
};
