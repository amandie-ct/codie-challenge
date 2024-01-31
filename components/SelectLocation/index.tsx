import FormSelect from '../formSelect'
import { useQuery } from '@tanstack/react-query'
import { fetchRegions, fetchCitiesByRegion } from '../../pages/api'
import { useState } from 'react'
export interface IRegion {
  name: string
  url: string
}

export interface ICity {
  name: string
  url: string
}

const LocationSelect = () => {
  const [selectedRegion, setSelectedRegion] = useState('kanto')
  const {
    data: regions,
    isLoading,
    isError
  } = useQuery<IRegion[], Error>({
    queryFn: () => fetchRegions(),
    queryKey: ['region']
  })

  const {
    data: cities,
    isLoading: isLoadingCities,
    isError: isErrorCities
  } = useQuery<ICity[], Error>({
    queryFn: () => fetchCitiesByRegion(selectedRegion),
    queryKey: ['city']
  })

  const regionArray = regions?.map((region) => region.name)
  const cityArray = cities?.map((city) => city.name)

  const handleRegionUpdate = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value)
  }

  const handleRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRegion(event.target.value)
    console.log(selectedRegion)
  }

  if (isLoading) {
    return <p>Carregando...</p>
  }

  if (isError) {
    return <p>Erro ao carregar os dados</p>
  }

  return (
    <>
      <FormSelect
        name="region"
        id="region_select"
        placeholder="Selecione sua região"
        select_label="Região"
        options={regionArray}
        onChange={handleRegionUpdate}
      />
      <FormSelect
        name="city"
        id="city_select"
        placeholder="Selecione sua cidade"
        select_label="Cidade"
        options={cityArray}
      />
    </>
  )
}

export default LocationSelect
