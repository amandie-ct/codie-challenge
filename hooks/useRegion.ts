import { useQuery } from '@tanstack/react-query'
import { IRegion } from '../components/SelectLocation'
import { fetchRegions } from '../pages/api'
import { useState } from 'react'

const {
  data: regions,
  isLoading,
  isError
} = useQuery<IRegion[], Error>({
  queryFn: () => fetchRegions(),
  queryKey: ['region']
})

const [selectedRegion, setSelectedRegion] = useState('')
const regionArray = regions?.map((region) => {
  return { value: region.name, label: region.name }
})
