import styled from 'styled-components';
import bgRhino from '../../assets/hero-pattern.png';

export const Container = styled.div`
  width: 100%;
  height: 600px;

  background: url('${bgRhino}');
`;

export const SliderContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;

  padding: 30px 30px;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;

    img {
      height: 400px;
    }
  }
`;
