import { GetServerSideProps } from 'next'
import { useState, ChangeEvent } from 'react'
import axios from 'axios'
import FormSelect from '../formSelect'

interface IRegion {
  name: string
  url: string
}

interface ILocationSelectProps {
  regions: IRegion[]
}

const LocationSelect = (props: ILocationSelectProps) => {
  const regionNames: string[] = props.regions.map((region) => region.name)
  const cityNames: string[] = ['cidade 1', 'cidade 2', 'cidade 3']
  const [selectedRegion, setSelectedRegion] = useState('')
  const region = 'Kanto'

  // fazer o request pra pegar a lista de cidades

  // quando o valor de um select mudar, fazer outro request passando a url como parâmetro pra pegar o array de cidades
  useEffect(() => {
    getCityFromRegion()
  }, [region])

  return (
    <>
      <FormSelect
        name="region"
        placeholder="Selecione sua região"
        select_label="Região"
        options={regionNames}
      />
      <FormSelect
        name="city"
        placeholder="Selecione sua cidade"
        select_label="Cidade"
        options={cityNames}
      />
    </>
  )
}

export const getServerSideProps: GetServerSideProps<
  ILocationSelectProps
> = async () => {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/region/')
    const regions: IRegion[] = response.data.results

    return {
      props: {
        regions
      }
    }
  } catch (error) {
    console.error('Error fetching data:')

    return {
      props: {
        regions: []
      }
    }
  }
}

export default LocationSelect
