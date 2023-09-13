import { Flex, VStack, Center, Text } from '@chakra-ui/react'
import Room from './Room.tsx'
import SearchBar from './SearchBar.tsx'
import { useState } from 'react'
import { fetchRoomsByFilter } from '../apis/api-rooms.ts'
import { useQuery } from '@tanstack/react-query'
import { RoomSearch } from '../../models/rooms.ts'

const initialQueryData = {
  address: undefined,
  min: undefined,
  max: undefined,
}

interface QueryData {
  address: string | undefined
  min: string | undefined
  max: string | undefined
}

export default function Find() {
  const [filterQuery, setFilterQuery] = useState<QueryData>(initialQueryData)

  const {
    data: rooms,
    isError,
    isLoading,
  } = useQuery(
    ['rooms', filterQuery],
    async () => await fetchRoomsByFilter(filterQuery)
  )

  if (isError) {
    return (
      <Center mt={200}>
        <div>
          Whoops looks like there was an error trying to load rooms avaiable
        </div>
      </Center>
    )
  }

  function changeQuery(filter: RoomSearch) {
    setFilterQuery(filter)
  }

  return (
    <Flex width="100vw" height="100%" justifyContent="center" mt={100} mb={100}>
      <VStack width="100%" spacing={10} alignItems="center">
        <Text fontSize="6xl" fontWeight="bold" textAlign="center">
          Find a Room
        </Text>
        <SearchBar setFilterQuery={changeQuery} />
        {!rooms || isLoading ? (
          <>
            <div>Loading rooms...</div>
          </>
        ) : (
          <>
            {rooms.length ? (
              <>
                {rooms.map((room) => {
                  return (
                    <Room
                      key={room.id}
                      rent={room.rent}
                      avail={room.avail}
                      until={room.until}
                      description={room.description}
                      image={room.image}
                      address={room.address}
                      id={room.id}
                    ></Room>
                  )
                })}
              </>
            ) : (
              <p>
                Oh no! There doesn&apos;t seem to be any room available that
                match your search
              </p>
            )}
          </>
        )}
      </VStack>
    </Flex>
  )
}
