import api from './api'

export const retrieveDesserts = async () => {
  const response = await api.get("/desserts");
  return response
}

export const createCall = async (request) => {
  const response = await api.post("/desserts", request);
  return response
}

export const deleteCall = async (request) => {
  const response = await api.delete("/desserts", request);
  return response
} 