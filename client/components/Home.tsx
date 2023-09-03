import FillFind from './FillFind'
import { Box, Text } from '@chakra-ui/react'

function Home() {
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="40vh"
      >
        <div>
          <Text fontSize="6xl" fontWeight="bold" textAlign="center">
            Welcome to Vacancy!
          </Text>
          <Text fontSize="xl" mt={2} textAlign="center">
            We&apos;re here to help you find the perfect match for your next
            flat.
          </Text>
        </div>
      </Box>

      <FillFind />
    </>
  )
}

export default Home
