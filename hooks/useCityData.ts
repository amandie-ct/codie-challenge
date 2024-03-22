import { useQuery } from '@tanstack/react-query'
import { fetchCitiesByRegion } from '../pages/api'

export interface ICity {
  name: string
  url: string
}

export const useCityData = (region: string) => {
  const {
    isLoading,
    data: city,
    isError,
    error,
    isFetching,
    refetch
  } = useQuery<ICity[]>({
    queryKey: ['locations'],
    queryFn: () => fetchCitiesByRegion(region),
    enabled: !!region
  })

  const cityArray = city?.map((city) => city.name)

  return { isLoading, cityArray }
}
