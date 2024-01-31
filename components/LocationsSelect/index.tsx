import { ChangeEvent } from 'react'
import FormSelect from '../formSelect'
import { useQuery } from '@tanstack/react-query'
import { fetchRegions } from '../../pages/api'
export interface IRegion {
  name: string
  url: string
}

const LocationSelect = () => {
  const {
    data: regions,
    isLoading,
    isError
  } = useQuery<IRegion[], Error>({
    queryFn: () => fetchRegions(),
    queryKey: ['region']
  })

  const regionArray = regions?.map((region) => region.name)

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
        placeholder="Selecione sua região"
        select_label="Região"
        options={regionArray}
      />
      <FormSelect
        name="city"
        placeholder="Selecione sua cidade"
        select_label="Cidade"
        // options={}
      />
    </>
  )
}

export default LocationSelect
