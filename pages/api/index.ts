import axios from 'axios'

const fetchRegions = async () => {
  const response = await axios.get('https://pokeapi.co/api/v2/region/')
  return response.data.results
}

export { fetchRegions }

const fetchCitiesByRegion = async (region: string) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/region/${region}`)
  return response.data.locations
}

export { fetchCitiesByRegion }
