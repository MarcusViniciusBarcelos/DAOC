import { HomeContext } from '../../contexts/HomeContext';
import './styles.css';
import { Div } from '../../components/Div';

export function Home() {
  return (
    <HomeContext>
      <Div />
    </HomeContext>
  );
}
