import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3004/'
})

export const apiAdress = axios.create({
  baseURL: 'https://viacep.com.br/ws'
})

export const apiChuck = axios.create({
  baseURL: 'https://api.chucknorris.io/'
})