import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flext;
  flex-direction: row;
`;
const Picker = styled.input`
  color: red;
`;

const DatePicker = ({ title, date, dateChange }) => (
  <Wrapper>
    <span>{title}</span>
    <Picker
      value={date !== '' ? new Date(date) : ''}
      type="date"
      onChange={e => dateChange(new Date(e.target.value).getTime())}
    />
  </Wrapper>
);

DatePicker.propTypes = {
  title: PropTypes.string,
  date: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  dateChange: PropTypes.func
};
DatePicker.defaultProps = {
  title: 'from',
  date: null,
  dateChange: null
};

export default DatePicker;
