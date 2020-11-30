import styled from 'styled-components';
import heroPattern from '../../assets/hero-pattern.png';

export const Container = styled.div`
  width: 100%;
  height: auto;

  padding-top: 100px;

  background: url('${heroPattern}');

  & > div {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 50px;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 100%
    );
  }
`;

export const ImageAndProduct = styled.main`
  width: 1200px;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  opacity: ${props => (props.chairVisibility ? 1 : 0)};

  transition: 0.5s;
`;

export const ImageContainer = styled.div`
  @media (max-width: 700px) {
    img {
      height: 380px;
    }
  }
`;

export const ProductPresentation = styled.article`
  display: flex;
  flex-direction: column;
  max-width: 400px;

  margin-left: 50px;

  color: #fff;

  h1 {
    font-size: 100px;
    padding: 0;
    margin-top: -25px;
  }

  span {
    font-size: 26px;
    font-weight: lighter;
    color: #d6001c;
    margin-left: 5px;
  }

  p {
    margin-top: -20px;
    margin-left: 5px;
    color: #ffffff99;
  }

  div {
    margin-top: 10px;
    margin-left: 2px;
  }

  @media (max-width: 700px) {
    margin-left: 10px;
  }
`;
