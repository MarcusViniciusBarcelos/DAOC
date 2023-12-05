import P from 'prop-types';
import * as Styled from './styles';
import { SectionContainer } from '../SectionContainer';

export const Footer = ({ footerHtmls }) => {
  const footerHtml = `copy; 2023 Marcus Barcelos. Todos os direitos reservados.`;
  return (
    <Styled.Container>
      <SectionContainer>{footerHtml}</SectionContainer>
    </Styled.Container>
  );
};

Footer.propTypes = {
  footerHtmls: P.string.isRequired,
};
