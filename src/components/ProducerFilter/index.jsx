import {
  func, string, arrayOf, shape,
} from 'prop-types';
import React, { useEffect, useState } from 'react';
import * as S from './ProducerFilter.style';

function ProducerFilter({ producers, parentCallback }) {
  const [checkedState, setCheckedState] = useState([]);

  useEffect(() => {
    setCheckedState(new Array(producers.length).fill(false));
  }, [producers]);

  const handleChange = (changedIndex) => {
    const updatedCheckedState = checkedState.map(
      (item, index) => (index === changedIndex ? !item : item),
    );

    setCheckedState(updatedCheckedState);

    parentCallback({
      updatedProducers: producers.filter((item, index) => updatedCheckedState[index]),
    });
  };

  return (
    <S.Wrapper>
      <p>Produtora</p>
      {producers.map((producer, index) => (
        <li key={producer.id}>
          <input
            type="checkbox"
            id={producer.id}
            name={producer.nome}
            value={producer.nome}
            onChange={() => handleChange(index)}
          />
          <label htmlFor={producer.id}>
            {producer.nome}
          </label>
        </li>
      ))}
    </S.Wrapper>
  );
}

ProducerFilter.propTypes = {
  producers: arrayOf(shape({
    id: string,
    nome: string,
    isoPais: string,
    produtoraMaeId: string,
    produtorasFilhas: arrayOf(string),
    jogosProduzidos: arrayOf(string),
  })),
  parentCallback: func,
};

ProducerFilter.defaultProps = {
  producers: [],
  parentCallback: () => { },
};

export default ProducerFilter;
