import ImageCard from "@/components/ImageCard";
import Navbar from "@/components/Navbar";
import { CharacterContext } from "@/context/CharacterContext";
import { useContext } from "react";
import { Container } from "../../styles/_favorites";

function Favorites() {
  const { favCharacters } = useContext(CharacterContext);

  return (
    <>
      <Navbar />
      <Container>
        <ImageCard characters={favCharacters} isFavoriteScreen={true} />
      </Container>
    </>
  );
}

export default Favorites;
