import { AiOutlineLoading3Quarters } from "react-icons/ai";
import styled from "styled-components";

export const ContainerLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

export const Loading = styled(AiOutlineLoading3Quarters)`
  animation: loading 0.7s infinite;
  color: #171717;
  font-size: 60px;

  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
