import styled from 'styled-components';

const Button = styled.button`
  background-color: ${props => {
    if (props.default) {
      return '#f4f4f4';
    }
    if (props.primary) {
      return '#523ee8';
    }
    if (props.danger) {
      return `rgb(247, 56, 89)`;
    }
  }};
  border: 0;

  border-color: ${props => {
    if (props.default) {
      return '#e0e0e1';
    }
  }};
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  line-height: 0;
  outline: 0;
  padding: 15px 15px;
`;
export default Button;
