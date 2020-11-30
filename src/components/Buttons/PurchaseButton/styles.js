import styled from 'styled-components';

export const Container = styled.div`
  a {
    text-decoration: none;

    button {
      display: flex;
      align-items: center;
      justify-content: center;

      padding: 10px 30px;
      background: #d6001c;

      font-size: 16px;
      font-weight: bold;
      color: #fff;

      border: none;
      border-radius: 4px;

      cursor: pointer;
    }

    button:hover {
      background: #a10015;
    }
  }
`;
