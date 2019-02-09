import styled from 'styled-components';

const Column = styled.div`
  flex: ${props => (props.span ? props.span : 1)};
  justify-content: space-between;
`;
export default Column;
