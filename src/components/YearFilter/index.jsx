import { func, number, arrayOf } from 'prop-types';
import React, { useEffect, useState } from 'react';
import * as S from './YearFilter.style';

function YearFilter({ years, parentCallback }) {
  const [checkedState, setCheckedState] = useState([]);
  const [yearRanges, setYearRanges] = useState([]);

  useEffect(() => {
    const sortedYears = [...years].sort((a, b) => a - b);
    let count = 0;
    const result = [];
    let subresult = [];
    for (let i = 0; i < sortedYears.length; i += 1) {
      subresult.push(sortedYears[i]);
      count += 1;
      if (count === 5) {
        result.push(subresult);
        subresult = [];
        count = 0;
      }
    }

    if (count > 0) result.push(subresult);
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
      parentCallback({
        updatedMinYear: -Infinity,
        updatedMaxYear: +Infinity,
      });

      return;
    }

    const maxYearRangeIndex = updatedCheckedState.lastIndexOf(true);

    parentCallback({
      updatedMinYear: yearRanges[minYearRangeIndex][0],
      updatedMaxYear: yearRanges[maxYearRangeIndex][yearRanges[maxYearRangeIndex].length - 1],
    });
  };

  return (
    <S.Wrapper>
      <p>Ano de lançamento</p>
      <S.Checklist>
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
      </S.Checklist>
    </S.Wrapper>
  );
}

YearFilter.propTypes = {
  years: arrayOf(number),
  parentCallback: func,
};

YearFilter.defaultProps = {
  years: [],
  parentCallback: () => { },
};

export default YearFilter;
