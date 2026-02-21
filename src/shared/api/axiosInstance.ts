import axios from "axios";

import { API_BASE_URL, KINOAREA_SERVER_API_URL, MOCK_API_BASE_URL } from "./config";

export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const mockApiAxiosInstance = axios.create({
  baseURL: MOCK_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const kinoareaServerInstance = axios.create({
  baseURL: KINOAREA_SERVER_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
