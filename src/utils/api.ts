import axios from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/api';

export async function getCharacters(page: number): Promise<any> {
  const characters = await axios.get(`${BASE_URL}/character/?page=${page}`);
  return characters;
}

export async function fetchCharactersByStatus(status: string): Promise<any> {
  const characters = await axios.get(`${BASE_URL}/character/?status=${status}`);
  return characters.data.results;
}

export async function fetchCharactersByGender(gender: string): Promise<any> {
  const characters = await axios.get(`${BASE_URL}/character/?gender=${gender}`);
  return characters.data.results;
}
