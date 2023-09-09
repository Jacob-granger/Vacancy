import { Flex, VStack, Center, HStack } from '@chakra-ui/react'
import Room from './Room.tsx'
import SearchBar from './SearchBar.tsx'
import { useRooms } from '../hooks/rooms.ts'
import { useState } from 'react'

export default function Find() {
  const [searchValue, setSearchValue] = useState('')
  const { data: rooms, isError, isLoading } = useRooms(searchValue)

  if (isError) {
    return (
      <Center mt={200}>
        <div>
          Whoops looks like there was an error trying to load rooms avaiable
        </div>
      </Center>
    )
  }

  if (!rooms || isLoading) {
    return (
      <Center mt={200}>
        <div>Loading Rooms...</div>
      </Center>
    )
  }

  return rooms.length !== 0 ? (
    <Flex width="100vw" height="100%" justifyContent="center" mt={100} mb={100}>
      <VStack width="100%" spacing={10} alignItems="center">
        <SearchBar setSearchValue={setSearchValue} />
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
      </VStack>
    </Flex>
  ) : (
    <Center mt={100}>
      <VStack spacing={10}>
        <SearchBar setSearchValue={setSearchValue} />
        <p>
          Oh no! There doesn&apos;t seem to be any room available that match
          your search
        </p>
      </VStack>
    </Center>
  )
}
