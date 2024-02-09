import { useQuery } from '@tanstack/react-query'
import { fetchRegions } from '../pages/api'

export interface IRegion {
  name: string
  url: string
}

// const {
//   data: regions,
//   isLoading,
//   isError
// } = useQuery<IRegion[]>({
//   queryFn: () => fetchRegions(),
//   queryKey: ['region']
// })

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
