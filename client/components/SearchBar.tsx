import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
} from '@chakra-ui/react'
import { useState } from 'react'
import { RoomSearch } from '../../models/rooms'

const initialFilterData = {
  address: '',
  min: '',
  max: '',
}

interface Props {
  setFilterQuery: (filter: RoomSearch) => void
}

export default function SearchBar(props: Props) {
  const [filter, setFilter] = useState(initialFilterData)
  const handleFilterChange = (
    event:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target
    setFilter({ ...filter, [name]: value })
  }

  const handleFilterSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    props.setFilterQuery(filter)
  }

  const handleClear = () => {
    setFilter(initialFilterData)
    props.setFilterQuery({
      ...filter,
      address: undefined,
      min: undefined,
      max: undefined,
    })
  }

  return (
    <Box mb={5}>
      <form onSubmit={handleFilterSubmit}>
        <HStack align="flex-end" spacing={6}>
          <FormControl width="60%">
            <FormLabel htmlFor="address">Location</FormLabel>
            <Select
              id="address"
              name="address"
              placeholder="Select"
              value={filter.address}
              onChange={handleFilterChange}
            >
              <option value="Dunedin">Dunedin</option>
              <option value="Auckland">Auckland</option>
              <option value="Whangarei">Whangarei</option>
            </Select>
          </FormControl>

          <FormControl width="30%">
            <FormLabel htmlFor="max">Max Rent (pw)</FormLabel>
            <InputGroup>
              {/* eslint-disable-next-line react/no-children-prop */}
              <InputLeftAddon children="$" />
              <Input
                id="max"
                name="max"
                type="string"
                placeholder="any"
                value={filter.max}
                onChange={handleFilterChange}
              ></Input>
            </InputGroup>
          </FormControl>
          <FormControl width="30%">
            <FormLabel htmlFor="min">Min Rent (pw)</FormLabel>
            <InputGroup>
              {/* eslint-disable-next-line react/no-children-prop */}
              <InputLeftAddon children="$" />
              <Input
                id="min"
                name="min"
                type="number"
                placeholder="any"
                value={filter.min}
                onChange={handleFilterChange}
              ></Input>
            </InputGroup>
          </FormControl>

          <Button width="20%" type="submit">
            Find
          </Button>
          <Button onClick={handleClear} width="20%">
            Clear
          </Button>
        </HStack>
      </form>
    </Box>
  )
}
