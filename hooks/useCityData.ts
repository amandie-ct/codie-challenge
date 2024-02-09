import { useQuery } from '@tanstack/react-query'
import { fetchCitiesByRegion } from '../pages/api'

export interface ILocation {
  name: string
  url: string
}

export const useLocationData = (region) => {
  const {
    isLoading,
    data: locations,
    isError,
    error,
    isFetching,
    refetch
  } = useQuery<ILocation[]>({
    queryKey: ['locations'],
    queryFn: () => fetchCitiesByRegion(region),
    enabled: !!region
  })

  return locations
}
