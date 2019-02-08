import React from 'react';
import styled from 'styled-components';
import Picker from 'react-date-picker';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flext;
  flex-direction: row;
`;

const DatePicker = ({ title, date, onChange }) => (
  <Wrapper>
    <span>{title}</span>
    <Picker clearIcon={null} value={new Date(date)} onChange={d => onChange(d.getTime())} />
  </Wrapper>
);

DatePicker.propTypes = {
  title: PropTypes.string,
  date: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func
};
DatePicker.defaultProps = {
  title: 'from',
  date: null,
  onChange: null
};

export default DatePicker;
