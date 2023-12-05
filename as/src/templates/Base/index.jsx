import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';
import * as Styled from './styles';

export const Base = () => {
  const homeContent = (
    <>
      <h1>Bem-vindo à nossa página inicial!</h1>
      <p>Descubra nossos produtos incríveis e entre em contato conosco.</p>
    </>
  );

  return (
    <>
      <Menu />
      <Styled.Container>{homeContent}</Styled.Container>
      <Footer />
    </>
  );
};
