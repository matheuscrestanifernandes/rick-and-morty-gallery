import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  width: 100%;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  color: #fff;
`;

export const ContainerLinks = styled.div`
  display: flex;
  font-size: 1.8rem;

  & > * + * {
    margin-left: 1rem;
  }
`;

export const StyledLink = styled(Link)`
  color: #171717;
  text-decoration: none;
  padding: 20px;
  transition: 300ms linear;
  border-bottom: 3px solid transparent;
  border-color: ${(props) => props.border};

  &:hover {
    border-color: #62cdff;
  }
`;
