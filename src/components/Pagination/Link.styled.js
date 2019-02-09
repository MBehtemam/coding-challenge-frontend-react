import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Linked = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  min-width: 30px;
  height: 30px;
  color: ${props => {
    if (props.selected) {
      return '#fff';
    }
    return '#303030';
  }};
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease-in-out;
  padding-left: 10px;
  padding-right: 10px;
  background-color: ${props => props.selected && `#523ee8`};
  :hover {
    background-color: #e0e0e1;
  }
`;
export default Linked;
