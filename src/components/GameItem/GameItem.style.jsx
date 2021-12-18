import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 375px;
  height: 235px;
  display: flex;
  box-sizing: border-box;
  align-items: flex-start;
  padding: 8px 24px;
  margin: 16px 0;
`;

export const SubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin-left: 16px;
  color: var(--dark);
  font-family: Arial;
`;

export const WrapperInfo = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  h2 {
    font-weight: bolder;
    margin: 2px 0;
  }
  h4 {
    font-weight: normal;
    margin: 0px;
  }
  p {
    margin: 2px 0;
  }
`;

export const WrapperPrice = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  height: auto;
  h2 {
    font-family: 'Roboto Mono', Arial;
    margin: 8px 0;
  }
  button {
    background-color: var(--orange);
    color: white;
    border: 0;
    border-radius: 5px;
    width: 100%;
    height: 30px;
    font-weight: bolder;
  }
`;

export const Price = styled.h2`
  font-family: 'Roboto Mono', Arial;
  font-weight: bolder;
  margin: 0;
  postion: relative;
  right: 0;
  bottom: 0;
`;

export const Button = styled.button`
  background-color: var(--orange);
  color: white;
  border: 0;
  border-radius: 5px;
  width: 200px;
  height: 30px;
  position: absolute;
  left: 156;
  bottom: 0;
  font-weight: bolder;
`;
