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

const fetchPokemons = async () => {
  const response = await axios.get('https://pokeapi.co/api/v2/pokemon/')
  return response.data.results
}

export { fetchPokemons }

const fetchDates = async () => {
  const response = await axios.get('https://localhost:3000/api/date')
  return response.data
}

export { fetchDates }

const fetchTime = async () => {
  const response = await axios.get('https://localhost:3000/api/time')
  return response.data
}

export { fetchTime }
