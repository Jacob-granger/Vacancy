import {
  Spacer,
  Flex,
  Box,
  Button,
  HStack,
  Text,
  VStack,
  Link,
} from '@chakra-ui/react'

export default function FillFind() {
  return (
    <Flex justifyContent="center" alignItems="center" height="25vh">
      <HStack spacing="50px">
        <Box
          height="100%"
          width="350px"
          borderRadius="15px"
          bg="#0147AB"
          boxShadow="0px 8px 12px rgba(0, 0, 0, 0.6)"
        >
          <VStack p="15px" spacing="50px" alignItems="flex-start">
            <Text
              ml="14px"
              mt="10px"
              color="white"
              fontSize="2xl"
              textAlign="left"
            >
              Looking for a new flatmate?
            </Text>
            <Link href="/fillRoom" mb="5">
              <Button
                fontSize="3xl"
                bg="transparent"
                color="white"
                _hover={{ bg: 'white', color: '#0147AB' }}
              >
                FILL A ROOM &#8594;
              </Button>
            </Link>
          </VStack>
        </Box>
        <Spacer />
        <Box
          height="100%"
          width="350px"
          borderRadius="15px"
          bg="white"
          boxShadow="0px 8px 12px rgba(0, 0, 0, 0.6)"
        >
          <VStack p="15px" spacing="50px" alignItems="flex-start">
            <Text
              ml="14px"
              mt="10px"
              color="#0147AB"
              fontSize="2xl"
              textAlign="left"
            >
              Looking for a new flat?
            </Text>
            <Link href="/findroom" mb="5">
              <Button
                fontSize="3xl"
                bg="transparent"
                color="#0147AB"
                _hover={{ bg: '#0147AB', color: 'white' }}
              >
                FIND A ROOM &#8594;
              </Button>
            </Link>
          </VStack>
        </Box>
      </HStack>
    </Flex>
  )
}
