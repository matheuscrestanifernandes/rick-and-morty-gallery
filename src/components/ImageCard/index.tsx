import { CharacterContext } from "@/context/CharacterContext";
import { Character } from "@/types";
import { useContext } from "react";
import {
  CardBorder,
  CardContainer,
  CardFooter,
  CardImage,
  CardItem,
  Container,
  IconPin,
  IconPinActive,
} from "../../styles/imageCard";

interface ImageCardProps {
  characters: Character[];
  isFavoriteScreen: boolean;
}

function ImageCard({ characters, isFavoriteScreen }: ImageCardProps) {
  const { toggleFavorite } = useContext(CharacterContext);

  return (
    <Container>
      {characters.map((index: Character) => (
        <CardContainer key={index.id}>
          <CardItem>
            <CardImage src={index.image} alt={index.name} />
            <CardFooter>
              <CardBorder>
                <p>
                  Name:{" "}
                  {index.name && index.name.split(" ").slice(0, 2).join(" ")}
                </p>
                <p>Status: {index.status}</p>
                <p>Species: {index.species}</p>
              </CardBorder>
              <div onClick={() => toggleFavorite(index as any)}>
                {isFavoriteScreen ? <IconPin /> : <IconPinActive />}
              </div>
            </CardFooter>
          </CardItem>
        </CardContainer>
      ))}
    </Container>
  );
}

export default ImageCard;
