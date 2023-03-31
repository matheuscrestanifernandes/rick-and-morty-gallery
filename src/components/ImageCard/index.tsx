import {CharacterContext} from '@/context/CharacterContext';
import {Character} from '@/types';
import {useContext} from 'react';
import {CardBorder, CardContainer, CardFooter, CardImage, CardItem, Container, IconHeart, IconHeartActive} from "../../styles/imageCard";

function ImageCard({characters, isFavoriteScreen}: any) {
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
                    {isFavoriteScreen ? (
                      <IconHeartActive />
                    ): (
                      <IconHeart />
                    )}
                  </div>
              </CardFooter>
            </CardItem>
          </CardContainer>
      ))}
      </Container>
  );
};

export default ImageCard;
