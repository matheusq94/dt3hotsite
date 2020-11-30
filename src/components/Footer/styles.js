import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 200px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #000;

  & > div {
    display: flex;
    flex-direction: column;
  }
`;

export const Social = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 200px;

  a {
    img {
      width: 26px;
    }
  }
`;
