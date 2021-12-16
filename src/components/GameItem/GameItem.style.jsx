import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 350px;
  display: flex;
  box-sizing: border-box;
  align-items: flex-start;
  padding: 8px;
  margin: 16px 0;
`;

export const SubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: 16px;
  color: var(--dark);
  font-family: Arial;
`;

export const WrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    font-weight: bolder;
    margin-bottom: 0px;
  }
  h4 {
    font-weight: normal;
    margin-top: 3px;
    margin-bottom: 0px;
  }
`;

export const Price = styled.h2`
  font-family: 'Roboto Mono', Arial;
  font-weight: bolder;
`;

export const Button = styled.button`
  background-color: var(--orange);
  color: white;
  border: 0;
  border-radius: 3px;
  width: 100%;
  height: 4vh;
  font-weight: bolder;
`;
