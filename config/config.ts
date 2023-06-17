import axios from 'axios'

export const DataInstance = axios.create({
    baseURL: process.env.API_URL || "http://localhost:8080", 
  });