import styled from 'styled-components';

export const Container = styled.nav`
  position: fixed;
  z-index: 3;
  display: flex;

  align-items: center;
  justify-content: space-between;

  padding: 0 20px 0 40px;

  width: 100%;
  height: 100px;

  background: ${props => (props.isScrolling ? '#1D1D1D' : 'transparent')};
`;

export const Logo = styled.div`
  img {
    height: 50px;
  }
`;

export const Burger = styled.div`
  position: fixed;
  top: 40px;
  right: 40px;
  z-index: 5;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  cursor: pointer;

  span {
    width: 35px;
    height: 3px;

    background: #fff;
    margin-bottom: 8px;
  }

  span:nth-child(2) {
    opacity: ${props => props.isOpened && 0};

    transition: opacity 0.2s;
  }

  span:first-child {
    transform: ${props => props.isOpened && 'rotate(45deg)'};
    margin-top: ${props => props.isOpened && '10px'};

    transition: transform 0.2s;
  }
  span:last-child {
    transform: ${props => props.isOpened && 'rotate(-45deg)'};
    margin-top: ${props => props.isOpened && '-22px'};

    transition: transform 0.2s;
  }
`;

export const Menu = styled.ul`
  position: absolute;
  z-index: 4;
  top: 0;
  right: ${props => (props.isOpened ? 0 : '-350px')};
  transition: right 0.3s;

  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 350px;
  height: 100vh;

  background: #a10015;

  list-style: none;

  li {
    font-size: 25px;
    color: #fff;

    margin-bottom: 20px;

    text-align: center;

    a {
      text-decoration: none;
      color: #fff;
    }
  }
`;

export const BlackOpacity = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  background: rgba(0, 0, 0, 0.8);
`;
