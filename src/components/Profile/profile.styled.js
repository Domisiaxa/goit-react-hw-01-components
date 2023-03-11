import styled from 'styled-components';

export const Usercard = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Card = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: whitesmoke;
  box-shadow: 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  border-radius: 6px;
`;

export const Description = styled.div`
  padding: 30px;
  text-align: center;
  font-size: 25px;
  font-weight: 600;
  color: black;
  margin-bottom: 15px;
`;

export const Image = styled.img`
  margin: 0 auto;
  margin-bottom: 20px;
`;

export const Name = styled.p`
  margin-bottom: 15px;
`;
export const Tag = styled.p`
  font-size: 18px;
  color: dimgrey;
  margin-bottom: 10px;
`;

export const Location = styled.p`
  font-size: 18px;
  color: dimgrey;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  background-color: #f3f6f9;
`;

export const Item = styled.li`
  background-color: #e9e9e9;
  padding: 15px 0px;
  align-items: center;
  border: 1px solid #c8c8c8;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  width: 90px;
`;
export const Label = styled.span`
  display: block;
  font-size: 15px;
  margin-bottom: 5px;
  text-align: center;
`;

export const Value = styled.span`
  font-weight: 800;
`;
