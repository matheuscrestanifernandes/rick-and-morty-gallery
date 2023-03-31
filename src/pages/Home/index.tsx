import {CharacterContext} from '@/context/CharacterContext';
import {useContext} from 'react';

import Filters from '@/components/Filters';
import Gallery from "@/components/Gallery";
import Navbar from "@/components/Navbar";

export default function Home(){
  const {characters} = useContext(CharacterContext);
  
  return(
    <>
      <Navbar />
      <Filters />
      <Gallery characters={characters}/>
    </>
  )
}