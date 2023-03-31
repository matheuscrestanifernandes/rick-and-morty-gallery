import AsyncStorage from '@react-native-async-storage/async-storage';
import {createContext, ReactNode, useEffect, useState} from 'react';
import {Character} from '../types';
import {fetchCharactersByGender, fetchCharactersByStatus, getCharacters} from '../utils/api';

interface CharacterContextData {
  characters: Character[];
  favCharacters: Character[];
  isLoading: boolean;
  pageNumber: Number;
  getCharacterByStatus: (status: string) => Promise<boolean>;
  getCharacterByGender: (gender: string) => Promise<boolean>;
  changePage: (id: number) => void;
  toggleFavorite: (id: number) => Promise<boolean>;
}

export const CharacterContext = createContext<CharacterContextData>({
  characters: [],
  favCharacters:  [],
  isLoading: true,
  pageNumber: 1,
  getCharacterByStatus: async (status: string) => true,
  getCharacterByGender: async (gender: string) => true,
  changePage: () => true,
  toggleFavorite: async (id: number) => false
});

type CharacterContextProps = {
  children: ReactNode,
}

export function CharacterProvider({ children }: CharacterContextProps) {
  const [pageNumber, setPageNumber] = useState<Number>(1);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [favCharacters, setFavCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const storageKey = '@galleryrickandmorty';

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedCharacters = await getCharacters(pageNumber.valueOf());
        setCharacters(Array.isArray(fetchedCharacters) ? fetchedCharacters : [fetchedCharacters]);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(true);
      }
    }

    fetchData();
  }, [pageNumber]);

  useEffect(() => {
    async function fetchedCharacters(){
      const data = await getIDs();
      setFavCharacters(data as []);
      return;
    }
    fetchedCharacters()
  }, [favCharacters])

  function changePage(pageId: number){
    setIsLoading(true);
    setPageNumber(pageId);
    return true;
  }

  async function getCharacterByStatus(status: string){
    try {
      setIsLoading(true);
      const data = await fetchCharactersByStatus(status);
      setCharacters(Array.isArray(data) ? data : [data]);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(true);
    }
    return true;
  }

  async function getCharacterByGender(gender: string){
    try {
      setIsLoading(true);
      const data = await fetchCharactersByGender(gender);
      setCharacters(Array.isArray(data) ? data : [data]);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(true);
    }
    return true;
  }

  async function getIDs(): Promise<number[]> {
    try {
      const jsonIDs = await AsyncStorage.getItem(storageKey);
      if (jsonIDs === null) {
        return [];
      }
      const ids = JSON.parse(jsonIDs) as number[];
      return ids;
    } catch (error) {
      console.error('Error in getIds:', error);
      return [];
    }
  }

  async function toggleFavorite(image: any): Promise<boolean> {
    const existingIDs = await getIDs();

    if (!image) {
      return false;
    }
    
    if (JSON.stringify(existingIDs).includes(image.name)) {
      const index = existingIDs.findIndex((id: any) => id.name === image.name);
      
      if (index === -1) {
        return false;
      }

      existingIDs.splice(index, 1);
      await AsyncStorage.setItem(storageKey, JSON.stringify(existingIDs));
      return true;
    }

    const newIDs = [...existingIDs, image];
    await AsyncStorage.setItem(storageKey, JSON.stringify(newIDs));
    return true;
  }

  return (
    <CharacterContext.Provider
      value={{ characters, favCharacters, isLoading, changePage, pageNumber, getCharacterByStatus, getCharacterByGender, toggleFavorite }}
    >
      {children}
    </CharacterContext.Provider>
  );
}