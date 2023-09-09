import { useQuery } from '@tanstack/react-query'
import { fetchRoomsBySearch } from '../apis/api-rooms'

export function useRooms(value: string) {
  const query = useQuery({
    queryKey: ['searchResults', value],
    queryFn: async () => await fetchRoomsBySearch(value),
  })

  return {
    ...query,
  }
}
