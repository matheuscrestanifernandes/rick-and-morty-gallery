import {CharacterContext} from '@/context/CharacterContext';
import {Character} from '@/types';
import {useContext} from 'react';
import {AiFillPushpin} from 'react-icons/ai';
import {CardBorder, CardContainer, CardFooter, CardImage, CardItem, Container} from "../../styles/imageCard";

function ImageCard({characters}: any) {
  const {toggleFavorite} = useContext(CharacterContext);
  
  return (
      <Container>
        {characters.map((index: Character) => (
          <CardContainer key={index.id}>
            <CardItem>
              <CardImage src={index.image} alt={index.name}/>
              <CardFooter>
                <CardBorder>
                  <p>Name: {index.name && index.name.split(' ').slice(0,2).join(' ')}</p>
                  <p>Status: {index.status}</p>
                  <p>Species: {index.species}</p>
                </CardBorder>
                  <div onClick={() => toggleFavorite(index as any)}>
                    <AiFillPushpin fontSize={30} color="#f0f0f0"/>
                  </div>
              </CardFooter>
            </CardItem>
          </CardContainer>
      ))}
      </Container>
  );
};

export default ImageCard;
