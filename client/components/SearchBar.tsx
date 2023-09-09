import { SearchIcon } from '@chakra-ui/icons'
import { Box, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useState } from 'react'

interface Props {
  setSearchValue: React.Dispatch<React.SetStateAction<string>>
}

export default function SearchBar(props: Props) {
  const [searchBar, setSearchBar] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchBar(event.target.value)
  }

  const handleEnterPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      props.setSearchValue(searchBar)
    }
  }

  return (
    <Box>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input
          onChange={handleChange}
          onKeyDown={handleEnterPress}
          value={searchBar}
          type="text"
          placeholder="Search..."
          borderColor="gray.200"
          _hover={{ borderColor: 'gray.300' }}
          _focus={{ borderColor: 'blue.400' }}
        />
      </InputGroup>
    </Box>
  )
}
