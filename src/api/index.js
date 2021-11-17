import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'http://localhost:3000/api'
});

export const createHero = async (data) => {
  return await httpClient.post('/superheroes', data);
}

export const getHeroes = async() => {
  await httpClient.get('/superheroes');
}