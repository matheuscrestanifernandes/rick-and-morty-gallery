import Gallery from '@/components/Gallery';
import Navbar from '@/components/Navbar';
import {CharacterContext} from '@/context/CharacterContext';
import {useContext} from 'react';

function Favorites(){
  const {favCharacters} = useContext(CharacterContext);

  return (
    <>
      <Navbar />
      <Gallery characters={favCharacters} isFavoriteScreen={true}/>
    </>
  )
}

export default Favorites;