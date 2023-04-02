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
  border: none;
  background-color: #f6f6f6;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  color: #404040;
  border-radius: 6px;
  font-size: 18px;
  height: 40px;
  width: 10rem;

  &:hover {
    border-color: #62cdff;
    color: #62cdff;
  }
`;

export const DropdownContent = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: #f6f6f6;
  border-radius: 6px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
  z-index: 1;
  top: 100%;
`;

export const DropdownItem = styled.button`
  background-color: #f6f6f6;
  border-radius: 6px;
  color: #404040;
  padding: 12px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  width: 20rem;
  text-align: left;

  &:hover {
    color: #62cdff;
  }
`;
