import {
  Box,
  Button,
  Flex,
  HStack,
  ScaleFade,
  Text,
  VStack,
  useDisclosure,
  Image,
} from '@chakra-ui/react'
import RoomCheckList from './RoomCheckList.tsx'
import Crew from './Crew.tsx'
import { Room as RoomType } from '../../models/rooms.ts'

export default function Room(props: RoomType) {
  const { isOpen, onToggle } = useDisclosure()

  return !isOpen ? (
    <Box boxShadow="0px 8px 12px rgba(0, 0, 0, 0.6)" width="40%" height="400px">
      <Flex
        bg="#0147AB"
        color="white"
        fontSize={{ sm: '20px', md: '25px', xl: '30px' }}
        w="100%"
        height="20%"
        align="center"
        pl="15px"
      >
        <h2>
          <strong>{props.address}</strong>
        </h2>
      </Flex>
      <HStack h="80%" gap="0">
        <Box width="60%" height="100%" p="20px">
          <Image
            fit="cover"
            w="100%"
            h="100%"
            src={props.image}
            alt="room at 43 Mains Avenue"
          />
        </Box>
        <VStack
          spacing={5}
          width="40%"
          pr="50px"
          fontSize="2xl"
          align="flex-end"
        >
          <Box bg="orange" pl="10px" pr="10px" borderRadius="lg">
            <p>
              <strong>{`$${props.rent} per week`}</strong>
            </p>
          </Box>

          <p>
            <strong>Avail:</strong> {props.avail}
          </p>
          <p>
            <strong>Until:</strong> {props.until}
          </p>
          <Button bg="#CCCCCC" onClick={onToggle} mt="15px">
            Find out more?
          </Button>
        </VStack>
      </HStack>
    </Box>
  ) : (
    <HStack width="100%" justifyContent="center">
      <Box width="20%">
        <ScaleFade initialScale={0.9} in={isOpen}>
          <VStack
            bg="#0147AB"
            boxShadow="0px 8px 12px rgba(0, 0, 0, 0.6)"
            width="100%"
            height="400px"
            color="white"
            pt="30px"
            align="center"
          >
            <Text mb="20px" fontSize="2xl">
              <strong>Meet the crew</strong>
            </Text>
            <Crew id={props.id} />
          </VStack>
        </ScaleFade>
      </Box>
      <Box
        boxShadow="0px 8px 12px rgba(0, 0, 0, 0.6)"
        width="40%"
        height="400px"
        p="10"
      >
        <Box pb="10px" bg="white" color="black" fontSize="3xl">
          <h2>
            <strong>{props.address}</strong>
          </h2>
        </Box>
        <Box fontSize="xl" pb="10px">
          <h3>
            {props.avail} - {props.until}
          </h3>
        </Box>

        <Box>
          <p>{props.description}</p>
        </Box>
        <Button bg="#CCCCCC" onClick={onToggle} mt="15px">
          See less
        </Button>
      </Box>
      <Box width="20%">
        <ScaleFade initialScale={0.9} in={isOpen}>
          <VStack
            pl="30px"
            bg="#0147AB"
            boxShadow="0px 8px 12px rgba(0, 0, 0, 0.6)"
            width="100%"
            height="400px"
            color="white"
            align="flex-start"
            pt="30px"
          >
            <Text mb="20px" fontSize="2xl">
              <strong>I understand the following:</strong>
            </Text>
            <RoomCheckList id={props.id} />
            <Button mt="20px">Send interest</Button>
          </VStack>
        </ScaleFade>
      </Box>
    </HStack>
  )
}
