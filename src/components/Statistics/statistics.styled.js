import styled from 'styled-components';

export const Section = styled.section`
  background-color: white;
  width: 555px;
  margin: 60px auto;
  border: 1px solid rgb(173 199 225);
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 25px;
  font-weight: 600;
  color: black;
  margin: 50px auto;
`;

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 120px;
  height: 100px;
  color: white;
  font-size: 20px;
  font-weight: 600;
  background-color: ${getRandomHexColor};
  }};
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
