import Navbar from './NavBar.tsx'
import { Outlet } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <div>
        <Navbar />
        <Outlet />
      </div>
    </ChakraProvider>
  )
}

export default App
