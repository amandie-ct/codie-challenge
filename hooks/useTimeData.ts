import { useQuery } from '@tanstack/react-query'
import { fetchTime } from '../pages/api'

export interface ITime {
  hours: string
}

export const useTimeData = () => {
  const {
    isLoading,
    data: time,
    isError,
    error,
    isFetching,
    refetch
  } = useQuery<ITime[]>({
    queryKey: ['time'],
    queryFn: () => fetchTime()
  })

  return time
}
