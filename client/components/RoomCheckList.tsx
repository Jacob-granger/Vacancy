import { useQuery } from '@tanstack/react-query'
import { fetchRequirements } from '../apis/api-rooms'
import { Center, Checkbox, Text } from '@chakra-ui/react'

export default function RoomCheckList({ id }) {
  const {
    data: requirements,
    isLoading,
    isError,
  } = useQuery(['requirements', id], () => fetchRequirements(id))

  if (isError) {
    return (
      <Center mt={200}>
        <div>Whoops looks like there was an error trying to load checklist</div>
      </Center>
    )
  }

  if (!requirements || isLoading) {
    return (
      <Center mt={200}>
        <div>Loading checklist...</div>
      </Center>
    )
  }
  console.log(requirements)

  return (
    <>
      {requirements.map((req, index) => {
        return (
          <Checkbox key={index}>
            <Text>{req.requirement}</Text>
          </Checkbox>
        )
      })}
    </>
  )
}
