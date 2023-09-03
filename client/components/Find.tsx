import {
  Flex,
  VStack,
  Box,
  Button,
  Center,
  InputGroup,
  InputLeftElement,
  Input,
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import Room from './Room.tsx'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchRequirements, fetchRooms } from '../apis/api-rooms.ts'

export default function Find() {
  // const id = 1
  const { data: rooms, isError, isLoading } = useQuery(['rooms'], fetchRooms)
  // const { data: requirements } = useQuery(['requirements', id], () =>
  //   fetchRequirements(id)
  // )
  console.log(rooms)
  // console.log(requirements)

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

  return (
    <Flex width="100vw" height="100%" justifyContent="center" mt={100} mb={100}>
      <VStack width="100%" spacing={10} alignItems="center">
        <Box>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.300" />
            </InputLeftElement>
            <Input
              type="text"
              placeholder="Search..."
              borderColor="gray.200"
              _hover={{ borderColor: 'gray.300' }}
              _focus={{ borderColor: 'blue.400' }}
            />
          </InputGroup>
        </Box>
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
  )
}
