import styled from 'styled-components';

const Button = styled.button`
  border: 0;
  border-color: #e0e0e1;
  color: #000000;
  cursor: pointer;
  font-size: 16px;
  line-height: 0;
  outline: 0;
  padding: 15px 15px;
`;
export const DefaultButton = styled(Button)`
  background-color: #f4f4f4;
`;
export const PrimaryButton = styled(Button)`
  background-color: #ffe484;
`;
export const DangerButton = styled(Button)`
  background-color: rgb(247, 56, 89);
`;
export default Button;
