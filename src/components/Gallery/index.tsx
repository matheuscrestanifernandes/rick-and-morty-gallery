import {CharacterContext} from '@/context/CharacterContext';
import {useContext} from 'react';
import {ContainerLoading, Loading} from '../../styles/gallery';
import ImageCard from '../ImageCard';
import Pagination from '../Pagination';

function Gallery({characters}: any) {
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
            <ImageCard characters={characters}/>
          </div>
          <Pagination
            totalPages={10}
          />
        </>
      )}
    </div>
  );
};

export default Gallery;
