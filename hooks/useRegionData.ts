import { useQuery } from '@tanstack/react-query'
import { fetchRegions } from '../pages/api'
export interface IRegion {
  name: string
  url: string
}

export const useRegionData = () => {
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

  const regionArray = regions?.map((region) => region.name)

  return regionArray
}
