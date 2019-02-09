import styled from 'styled-components';

const Card = styled.section`
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 8px;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 10px;
  text-align: left;
  transform: translateY(0px);
  transition: translate 0.18s ease 0s, box-shadow 0.18s ease 0s;
  width: 100%;
`;

export default Card;
