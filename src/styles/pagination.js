import styled from "styled-components";

export const Container = styled.ul`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
  font-size: 1.5rem;
`;

export const ButtonContainer = styled.li`
  list-style: none;
`;

export const Button = styled.p`
  user-select: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  border-color: ${(props) => props.active};
  color: ${(props) => props.active};
  border-radius: 6px;
  border: 1px solid;
  font-size: 18px;
  height: 40px;
  width: 40px;

  &:hover {
    border-color: #62cdff;
    color: #62cdff;
  }
`;
