import { CharacterContext } from "@/context/CharacterContext";
import { useContext } from "react";

import Filters from "@/components/Filters";
import ImageCard from "@/components/ImageCard";
import Navbar from "@/components/Navbar";
import Pagination from "@/components/Pagination";
import { ContainerLoading, Loading } from "@/styles/loading";

export default function Home() {
  const { characters, isLoading } = useContext(CharacterContext);

  return (
    <>
      {isLoading ? (
        <ContainerLoading>
          <Loading />
        </ContainerLoading>
      ) : (
        <>
          <Navbar />
          <Filters />
          <ImageCard characters={characters} isFavoriteScreen={false} />
          <Pagination totalPages={10} />
        </>
      )}
    </>
  );
}
