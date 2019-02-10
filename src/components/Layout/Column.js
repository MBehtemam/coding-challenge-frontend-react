import styled from 'styled-components';

const Column = styled.div`
  flex: ${props => (props.span ? props.span : 1)};
  justify-content: space-between;
  margin-left: 10px;
  margin-right: 10px;
`;
export default Column;
