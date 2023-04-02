import axios from "axios";
import { Character } from "../types/index";

const BASE_URL = "https://rickandmortyapi.com/api";

export async function getCharacters(page: number): Promise<Character> {
  const characters = await axios.get(`${BASE_URL}/character/?page=${page}`);
  return characters.data.results;
}

export async function fetchCharactersByStatus(
  status: string
): Promise<Character> {
  const characters = await axios.get(`${BASE_URL}/character/?status=${status}`);
  return characters.data.results;
}

export async function fetchCharactersByGender(
  gender: string
): Promise<Character> {
  const characters = await axios.get(`${BASE_URL}/character/?gender=${gender}`);
  return characters.data.results;
}
