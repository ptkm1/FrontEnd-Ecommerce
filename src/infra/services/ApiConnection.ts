import axios from 'axios'

const APIConnection = axios.create({
  baseURL: "http://0.0.0.0:3000"
})

export type { APIConnection }