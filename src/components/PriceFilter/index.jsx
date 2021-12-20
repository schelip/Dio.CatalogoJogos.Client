import {
  func, number, arrayOf,
} from 'prop-types';
import React, { useEffect, useState } from 'react';
import * as S from './PriceFilter.style';

function PriceFilter({ prices, setSelectedPriceRanges }) {
  const [checkedState, setCheckedState] = useState([]);
  const [priceRanges, setPriceRanges] = useState([]);

  useEffect(() => {
    const sortedPrices = [...prices]
      .filter((item, index) => prices.indexOf(item) === index)
      .sort((a, b) => a - b);
    const minPrice = Math.floor(sortedPrices[0] / 10) * 10;
    const maxPrice = Math.ceil(sortedPrices[sortedPrices.length - 1]);
    const result = [];

    if (minPrice && maxPrice) {
      let p;
      for (p = minPrice; p < maxPrice - 10; p += 10) {
        result.push([p, p + 9.99]);
      }
      result.push([p, maxPrice]);
    }

    if (result.toString() !== priceRanges.toString()) setPriceRanges(result);
  }, [prices]);

  useEffect(() => {
    setCheckedState(new Array(priceRanges.length).fill(false));
  }, [priceRanges]);

  const handleChange = (changedIndex) => {
    const updatedCheckedState = checkedState.map(
      (item, index) => (index === changedIndex ? !item : item),
    );

    setCheckedState(updatedCheckedState);

    setSelectedPriceRanges(
      priceRanges.filter((item, index) => updatedCheckedState[index]),
    );
  };

  return (
    <S.Wrapper>
      <p>Preços</p>
      {priceRanges.map((priceRange, index) => (
        <li key={`priceRange${priceRange[0]}`}>
          <input
            type="checkbox"
            id={`priceRange${priceRange[0]}`}
            name={`priceRange${priceRange[0]}`}
            value={priceRange[0]}
            onChange={() => handleChange(index)}
          />
          <label htmlFor={`priceRange${priceRange[0]}`}>
            {priceRange[0] !== priceRange[1]
              ? `R$${priceRange[0].toFixed(2)} - R$${priceRange[1].toFixed(2)}`
              : `R$${priceRange[0].toFixed(2)}`}
          </label>
        </li>
      ))}
    </S.Wrapper>
  );
}

PriceFilter.propTypes = {
  prices: arrayOf(number),
  setSelectedPriceRanges: func,
};

PriceFilter.defaultProps = {
  prices: [],
  setSelectedPriceRanges: () => { },
};

export default PriceFilter;
