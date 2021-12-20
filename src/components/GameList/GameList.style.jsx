import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: row;
`;

export const Filter = styled.div`
  width: 15%;
  padding: 2px 40px;
  font-family: 'Roboto Mono';
  font-weight: normal;
  background-color: var(--light-gray);
`;

export const ListWrapper = styled.div`
  width: 80%;
  padding-right: 32px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 350px);
  justify-content: space-between;
`;
