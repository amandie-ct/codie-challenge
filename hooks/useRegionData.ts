import { useQuery } from '@tanstack/react-query'
import { fetchRegions } from '../pages/api'

export interface IRegion {
  name: string
  url: string
}

const {
  data: regions,
  isLoading,
  isError
} = useQuery<IRegion[], Error>({
  queryFn: () => fetchRegions(),
  queryKey: ['region']
})

const regionArray = regions?.map((region) => {
  return { value: region.name, label: region.name }
})

const useRegionData = () => {
  const {
    isLoading,
    data: regions,
    isError,
    error,
    isFetching,
    refetch
  } = useQuery<IRegion[]>({
    queryKey: ['region'],
    queryFn: () => fetchRegions()
  })

  const regionArray = regions?.map((region) => {
    return { value: region.name, label: region.name }
  })
  return regionArray
}
