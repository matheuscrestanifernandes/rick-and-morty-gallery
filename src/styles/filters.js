import styled from "styled-components";

export const DropdownWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  margin: 2rem;
`;

export const DropdownButton = styled.button`
  list-style: none;
  user-select: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  border-color: #404040;
  background-color: #171918;
  color: #404040;
  border-radius: 6px;
  border: 1px solid;
  font-size: 18px;
  height: 40px;
  width: 10rem;

  &:hover {
    border-color: #65C38C;
    color: #65C38C;
  }
`;

export const DropdownContent = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: #171918;
  border: 1px solid;
  border-radius: 6px;
  border-color: #404040;
  z-index: 1;
  top: 100%;
`;

export const DropdownItem = styled.button`
  background-color: #171918;
  border-radius: 6px;
  color: #404040;
  padding: 12px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  width: 20rem;
  text-align: left;

  &:hover {
    color: #65C38C;
  }
`;