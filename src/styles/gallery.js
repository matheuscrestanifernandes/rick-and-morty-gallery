import {AiOutlineLoading3Quarters} from 'react-icons/ai';
import styled from "styled-components";

export const ContainerLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Loading = styled(AiOutlineLoading3Quarters)`
  animation: spin .7s infinite;
  color: white;
  font-size: 60px;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;