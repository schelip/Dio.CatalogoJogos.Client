import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  display: flex;
  flex-direction: row;
`;

export const Filter = styled.div`
  width: 20%;
  padding: 2px 80px;
  font-family: 'Roboto Mono';
  text-align: right;
  font-weight: normal;
  margin-right: 24px;
  background-color: var(--light-gray);
`;

export const ProducerWrapper = styled.div`
`;

export const PriceWrapper = styled.div`
`;

export const ListWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 350px);
  justify-content: space-between;
`;
