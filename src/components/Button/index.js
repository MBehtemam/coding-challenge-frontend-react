import styled from 'styled-components';

const Button = styled.button`
  background-color: ${props => {
    if (props.btnStyle === 'default') {
      return '#f4f4f4';
    }
    if (props.btnStyle === 'primary') {
      return '#523ee8';
    }
    if (props.btnStyle === `danger`) {
      return `rgb(247, 56, 89)`;
    }
    return '#ffffff';
  }};
  border: 0;
  border-color: ${props => props.default && '#e0e0e1'};
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  line-height: 0;
  outline: 0;
  padding: 15px 15px;
`;
export default Button;
