import styled, { css } from 'styled-components';

export const NavContainer = styled.nav`
  background-color: #3498db;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: #fff;
    text-decoration: none;
    margin-right: 20px;
    font-weight: bold;

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Logo = styled.h1`
  font-size: 24px;
  color: #fff;
  margin: 0;
`;

export const NotFound = styled.div`
  text-align: center;
  margin-top: 50px;
  font-size: 24px;
  color: #e74c3c;
`;
