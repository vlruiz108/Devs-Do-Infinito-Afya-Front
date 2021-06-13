import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://devs-agmed-afya.herokuapp.com/'
})

export const apiAddress = axios.create({
  baseURL: 'https://viacep.com.br/ws'
})