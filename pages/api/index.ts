import axios from 'axios'

const fetchRegions = async () => {
  const response = await axios.get('https://pokeapi.co/api/v2/region/')
  return response.data
}

export { fetchRegions }

const fetchCities = async (region: string) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/${region}`)
  return response.data
}

export { fetchCities }
