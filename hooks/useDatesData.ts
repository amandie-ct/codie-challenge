import { useQuery } from '@tanstack/react-query'
import { fetchDates } from '../pages/api'

export interface IDate {
  date: string
}

export const useDatesData = () => {
  const {
    isLoading,
    data: dates,
    isError,
    error,
    isFetching,
    refetch
  } = useQuery<IDate[]>({
    queryKey: ['dates'],
    queryFn: () => fetchDates()
  })

  const dateArray = dates?.map((date) => date.date)

  return { isLoading, dateArray }
}
