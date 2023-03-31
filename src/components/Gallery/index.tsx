import {CharacterContext} from '@/context/CharacterContext';
import {useContext} from 'react';
import {ContainerLoading, Loading} from '../../styles/gallery';
import ImageCard from '../ImageCard';

function Gallery({characters, isFavoriteScreen}: any) {
  const {isLoading} = useContext(CharacterContext);

  return (
    <div>
      {isLoading ? (
        <ContainerLoading>
          <Loading />
        </ContainerLoading>
      ) : (
        <>
          <div>
            <ImageCard characters={characters} isFavoriteScreen={isFavoriteScreen}/>
          </div>
        </>
      )}
    </div>
  );
};

export default Gallery;
