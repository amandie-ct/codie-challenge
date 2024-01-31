import { GetServerSideProps } from 'next'
import { useState, ChangeEvent, useEffect } from 'react'
import axios from 'axios'
import FormSelect from '../formSelect'

export interface IRegion {
  name: string
  url: string
}

export interface ILocationSelectProps {
  regions: IRegion[]
}

const LocationSelect = (props: ILocationSelectProps) => {
  const regionNames: string[] = props.regions.map((region) => region.name)
  const [cityNames, setCityNames] = useState([])
  const [region, setRegion] = useState('')

  useEffect(() => {
    getCityNames()
  })

  const getCityNames = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/${region}`)
      return response.data
    } catch (error) {
      console.log(error)
    }
  }

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
        // getData={getCityNames}
      />
    </>
  )
}

// export const getServerSideProps: GetServerSideProps<
//   ILocationSelectProps
// > = async () => {
//   try {
//     const response = await axios.get('https://pokeapi.co/api/v2/region/')
//     const regions: IRegion[] = response.data.results

//     return {
//       props: {
//         regions
//       }
//     }
//   } catch (error) {
//     console.error('Error fetching data:')

//     return {
//       props: {
//         regions: []
//       }
//     }
//   }
// }

export default LocationSelect
