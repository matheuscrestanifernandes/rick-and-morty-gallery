import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.5rem;
  background-color: #171918;
  border-bottom: 1px solid #404040;
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
  color: #fff;
  text-decoration: none;
  padding: 20px;
  transition: 300ms linear;
  border-bottom: 3px solid transparent;
  border-color: ${props => props.border};;

  &:hover {
    border-color:#65C38C;
  }
`;