import { TbPinnedFilled, TbPinnedOff } from "react-icons/tb";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(auto, 300px));
  grid-auto-rows: 300px;
  grid-gap: 2rem;
  max-width: 100vw;
  padding: 0 1rem;
  justify-content: center;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10em, 1fr));
  grid-auto-rows: 20em;
  grid-gap: 15px;
`;

export const CardItem = styled.div`
  width: 20em;
  height: 20em;
  position: relative;
  overflow: hidden;
  color: #000;
  border-radius: 6px;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const CardFooter = styled.div`
  padding: 0 0.5rem;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 10px;
  justify-content: space-between;
  background: hsl(0 0% 0% / 60%);
  backdrop-filter: blur(4px);
  height: 30%;
  align-content: center;
  color: #fff;
`;

export const CardBorder = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  border-left: 4px solid #62cdff;
`;

export const IconPin = styled(TbPinnedOff)`
  font-size: 30px;
  color: #62cdff;

  &:hover {
    cursor: pointer;
    color: #ff0000;
  }
`;

export const IconPinActive = styled(TbPinnedFilled)`
  font-size: 30px;
  color: #fff;

  &:hover {
    cursor: pointer;
    color: #62cdff;
    animation: spin 0.7s;
  }

  @keyframes spin {
    0% {
      transform: translateY(0px);
    }
    100% {
      transform: translateY(-5px);
    }
  }
`;
