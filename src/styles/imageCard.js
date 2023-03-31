import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai';
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(auto, 300px));
  grid-auto-rows: 300px;
  grid-gap: 1rem;
  margin: 2rem;
`;

export const CardContainer = styled.div`
  width: 100%;
`;

export const CardItem = styled.div`
  width: 300px;
  height: 300px;
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
  padding: 0 .5rem;
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
  padding: .5rem;
  border-left: 4px solid #65C38C;
`;

export const IconHeart = styled(AiOutlineHeart)`
  font-size: 30px;
  color: #f0f0f0;

  &:hover {
    cursor: pointer;
    color: #d11f4c;
  }
`

export const IconHeartActive = styled(AiFillHeart)`
  font-size: 30px;
  color: #d11f4c;

  &:hover {
    cursor: pointer;
  }
`