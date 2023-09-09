import { Avatar, Center, Grid, GridItem, Text } from '@chakra-ui/react'
import { fetchCrew } from '../apis/api-rooms'
import { useQuery } from '@tanstack/react-query'

export default function Crew({ id }: { id: number }) {
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
        {crew.map(
          (
            member: { name: string; age: number; image: string },
            index: number
          ) => {
            return (
              <GridItem key={index} colSpan={1}>
                <Avatar
                  bg="#ECECEC"
                  size="xl"
                  src={member.image}
                  name={member.name}
                  borderRadius="full"
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
          }
        )}
      </Grid>
    </>
  )
}
