import styled from 'styled-components';

export const Wrapper = styled.div`
  text-align: center;
  padding: 20px;

  h1 {
    font-size: 36px;
    color: #2c3e50;
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    color: #34495e;
    margin-bottom: 15px;
  }

  .highlight {
    font-weight: bold;
    color: #e74c3c;
  }

  .image-container {
    margin-top: 20px;
    img {
      max-width: 100%;
      height: auto;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
  }
`;
