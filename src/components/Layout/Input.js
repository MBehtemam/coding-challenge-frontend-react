import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Row from './Row';

const InputLabel = styled.label`
  background-color: #000000;
  border-radius: 10px 0px 0px 10px;
  color: #ffffff;
  padding: 12px 10px;
`;
const InputText = styled.input`
  background-clip: padding-box;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  color: #495057;
  display: block;
  font-size: 1rem;
  line-height: 1.5;
  padding: 0.375rem 0rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  width: 90%;
`;
const Input = ({ onBlur, addOnBefore, onChange, value, defaultValue }) => (
  <Row>
    <InputLabel>{addOnBefore}</InputLabel>
    <InputText
      defaultValue={defaultValue}
      value={value}
      onBlur={e => onBlur(e.target.value)}
      onChange={e => onChange(e.target.value)}
    />
  </Row>
);

Input.propTypes = {
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  addOnBefore: PropTypes.string,
  defaultValue: PropTypes.string,
  value: PropTypes.string
};
Input.defaultProps = {
  onChange: val => val,
  onBlur: val => val,
  addOnBefore: '',
  defaultValue: '',
  value: ''
};
export default Input;
