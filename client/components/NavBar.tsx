import { Flex, Box, Spacer, Link } from '@chakra-ui/react'

export default function Navbar() {
  return (
    <Box position="fixed" top="0" left="0" right="0" zIndex="sticky">
      <Flex bg="#0147AB" p={4} align="center">
        <Box pl="7rem">
          <Link href="/" fontSize="xl" color="white">
            VACANCY
          </Link>
        </Box>
        <Spacer />
        <Box pr="7rem">
          <Link href="#" color="white" mr={5}>
            Home
          </Link>
          <Link href="#" color="white" mr={5}>
            About
          </Link>
          <Link href="#" color="white" mr={10}>
            Contact
          </Link>
          <Link href="#" color="white">
            Login
          </Link>
        </Box>
      </Flex>
    </Box>
  )
}
