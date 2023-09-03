import {
  Avatar,
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Text,
} from '@chakra-ui/react'
import { fetchCrew } from '../apis/api-rooms'
import { useQuery } from '@tanstack/react-query'

export default function Crew({ id }) {
  const {
    data: crew,
    isLoading,
    isError,
  } = useQuery(['crew', id], () => fetchCrew(id))

  if (isError) {
    return (
      <Center mt={200}>
        <div>Whoops looks like there was an error!</div>
      </Center>
    )
  }

  if (!crew || isLoading) {
    return (
      <Center mt={200}>
        <div>Loading crew...</div>
      </Center>
    )
  }
  console.log(crew)
  return (
    <>
      <Grid templateColumns="repeat(2, 1fr)" columnGap={10} rowGap={2}>
        {crew.map((member, index) => {
          return (
            <GridItem key={index} colSpan={1}>
              <Avatar
                bg="#ECECEC"
                size="xl" // Set the size of the circle
                src={member.image}
                name={member.name} // Display a fallback name if the image fails to load
                borderRadius="full" // Make the avatar appear as a circle
              />
              <Center>
                <Text mt="10px" fontSize="xl">
                  <strong>
                    {member.name} - {member.age}
                  </strong>
                </Text>
              </Center>
            </GridItem>
          )
        })}
      </Grid>
    </>
  )
}
