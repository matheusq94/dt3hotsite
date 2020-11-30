import styled from 'styled-components';
// import playerBg from '../../assets/player-bg.jpg';

export const Container = styled.div`
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;

  div {
    max-width: 500px;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  p {
    font-size: 50px;
    color: #fff;
    text-transform: uppercase;
    line-height: 1em;
    text-align: center;

    strong {
      font-weight: black;
      color: #d6001c;
    }
  }
`;
