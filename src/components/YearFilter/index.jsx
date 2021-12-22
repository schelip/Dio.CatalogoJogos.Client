import { func, number, arrayOf } from 'prop-types';
import React, { useEffect, useState } from 'react';
import * as S from './YearFilter.style';

function YearFilter({ years, setMinYear, setMaxYear }) {
  const [checkedState, setCheckedState] = useState([]);
  const [yearRanges, setYearRanges] = useState([]);

  useEffect(() => {
    const sortedYears = [...years]
      .filter((item, index) => years.indexOf(item) === index)
      .sort((a, b) => a - b);

    const minYear = sortedYears[0];
    const maxYear = sortedYears[sortedYears.length - 1];
    const result = [];

    if (minYear && maxYear) {
      let y;
      for (y = minYear; y < maxYear - 5; y += 5) {
        result.push([y, y + 4]);
      }
      result.push([y, maxYear]);
    }

    if (result.toString() !== yearRanges.toString()) { setYearRanges(result); }
  }, [years]);

  useEffect(() => {
    setCheckedState(new Array(yearRanges.length).fill(false));
  }, [yearRanges]);

  const handleChange = (changedIndex) => {
    const updatedCheckedState = checkedState.map(
      (item, index) => (index === changedIndex ? !item : item),
    );

    setCheckedState(updatedCheckedState);

    const minYearRangeIndex = updatedCheckedState.indexOf(true);
    if (minYearRangeIndex === -1) {
      setMinYear(-Infinity);
      setMaxYear(+Infinity);

      return;
    }

    const maxYearRangeIndex = updatedCheckedState.lastIndexOf(true);

    setMinYear(yearRanges[minYearRangeIndex][0]);
    setMaxYear(yearRanges[maxYearRangeIndex][yearRanges[maxYearRangeIndex].length - 1]);
  };

  return (
    <S.Wrapper>
      <p>Ano de lançamento</p>
      {yearRanges.map((yearRange, index) => (
        <li key={`range${yearRange[0]}`}>
          <input
            type="checkbox"
            id={`range${yearRange[0]}`}
            name={`range${yearRange[0]}`}
            value={(yearRange[0], yearRange[yearRange.length - 1])}
            onChange={() => handleChange(index)}
          />
          <label htmlFor={`range${yearRange[0]}`}>
            {yearRange[0]}
            {yearRange.length > 1 && ` - ${yearRange[yearRange.length - 1]}`}
          </label>
        </li>
      ))}
    </S.Wrapper>
  );
}

YearFilter.propTypes = {
  years: arrayOf(number),
  setMinYear: func,
  setMaxYear: func,
};

YearFilter.defaultProps = {
  years: [],
  setMinYear: () => { },
  setMaxYear: () => { },
};

export default YearFilter;
