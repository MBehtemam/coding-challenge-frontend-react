import React from 'react';
import styled from 'styled-components';
import Picker from 'react-date-picker';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flext;
  flex-direction: row;
`;

const DatePicker = ({ title, date, onChagne }) => (
  <Wrapper>
    <span>{title}</span>
    <Picker value={new Date(date)} onChange={d => onChagne(d.getTime())} />
  </Wrapper>
);

DatePicker.propTypes = {
  title: PropTypes.string,
  date: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChagne: PropTypes.func
};
DatePicker.defaultProps = {
  title: 'from',
  date: null,
  onChagne: null
};

export default DatePicker;
