import {CharacterContext} from '@/context/CharacterContext';
import {useContext} from 'react';
import {Button, ButtonContainer, Container} from '../../styles/pagination';

interface PaginationProps {
  totalPages: number;
}

function Pagination({
  totalPages,
}: PaginationProps) {
  const {changePage, pageNumber} = useContext(CharacterContext);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <Container>
      {pageNumbers.map((index) => (
        <ButtonContainer key={index}>
          <Button onClick={() => changePage(index)} active={pageNumber == index ? '#65C38C' : '#404040'}>{index}</Button>
        </ButtonContainer>
      ))}
    </Container>
  );
}

export default Pagination;