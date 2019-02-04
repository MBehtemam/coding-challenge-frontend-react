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

const DatePicker = ({ title, date, onChange }) => (
  <Wrapper>
    <span>{title}</span>
    <Picker value={date} type="date" onChange={e => onChange(new Date(e.target.value).getTime())} />
  </Wrapper>
);

DatePicker.propTypes = {
  title: PropTypes.string,
  date: PropTypes.oneOfType([PropTypes.number, PropTypes.any]),
  onChange: PropTypes.func
};
DatePicker.defaultProps = {
  title: 'from',
  date: null,
  onChange: null
};

export default DatePicker;
