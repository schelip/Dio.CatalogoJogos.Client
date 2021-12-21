import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 70%;
  margin: auto;
  margin-right: 5px;
  margin-bottom: 12px;
  height: auto;
  position: relative;
`;

export const AuthenticatedWrapper = styled.div`
  height: 30px;
  font-size: 15pt;
  float: right;
  display: flex;
  flex-direction: row;

  b {
    font-size: 15pt;
    color: var(--orange);
  }
`;

export const NameWrapper = styled.div`
  margin: 0;
  margin-top: auto;
`;

export const PriceWrapper = styled.div`
  font-size: 12pt;
  font-weight: normal;
  margin: 0 16px;
  margin-top: auto;
`;

export const LogoutButton = styled.button`
    font-size: 11pt;
    width: 150px;
    border: 0;
    border-radius: 5px;
    font-family: 'Roboto Mono', monospace;
    font-weight: bold;

    &:hover {
      cursor: pointer;
      background-color: var(--light-gray);
    }
  }
`;

export const LoginButton = styled.button`
  width: 150px;
  height: 30px;
  float: right;
  font-family: 'Roboto Mono', monospace;
  font-weight: bold;
  font-size: 11pt;
  cursor: pointer;
  border: 0;

  &.inactive {
    background-color: white;
    color: var(--dark-gray-blue);
    border-radius: 5px;
    
    &:hover {
      background-color: var(--light-gray);
    }
  }

  &.active {
    background-color: var(--orange);
    color: white;
    border-radius: 5px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;

    &:hover {
      background-color: orange;
    }
  }
`;

export const LoginForm = styled.form`
  position: absolute;
  top: 30px;
  right: 0;
  z-index: 1000;
  width: 300px;
  color: white;
  background-color: var(--orange);
  border-radius: 5px;
  border-top-right-radius: 0px;
  padding: 8px 16px;
  box-shadow: 2px 2px 2px var(--dark-gray-blue);
  font-family: 'Roboto Mono', monospace;

  input {
    border: 2px solid orange;
    margin-top: 4px;
    margin-bottom: 16px;
    border-radius: 4px;
    width: 100%;
    height: 25px;
    font-family: 'Roboto Mono', monospace;
  }

  button {
    background-color: white;
    border: 0;
    border-radius: 3px;
    font-family: 'Roboto Mono', monospace;
    padding: 2 4px;
    height: 25px;
    width: 100px;
    float: right;

    &:hover {
      cursor: pointer;
      background-color: var(--light-gray);
    }
  }
`;
