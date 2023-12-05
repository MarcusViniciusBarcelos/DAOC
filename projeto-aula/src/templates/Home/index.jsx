import * as Styled from './styles';

export function Home() {
  return (
    <Styled.Wrapper>
      <h1>Welcome to our Home Page</h1>
      <p>
        Explore our amazing products and find the perfect items for your home.
      </p>
      <div className="highlight">Special Offers this week!</div>
      <div className="image-container">
        <img src="https://via.placeholder.com/800x400" alt="Home Decoration" />
      </div>
    </Styled.Wrapper>
  );
}
