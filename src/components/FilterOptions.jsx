import {
  Box,
  HStack,
  Select,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon,
} from '@chakra-ui/react'
import { CalendarIcon, InfoOutlineIcon } from '@chakra-ui/icons'
import { FaUserCircle, FaMapMarkerAlt } from 'react-icons/fa'

const FilterOptions = () => {
  return (
    <Box width='100%'>
      <HStack spacing={4} flexWrap='wrap'>
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<CalendarIcon />}
            variant='outline'
            borderRadius='full'
            px={6}
          >
            July 2024
          </MenuButton>
          <MenuList>
            <MenuItem>June 2024</MenuItem>
            <MenuItem>August 2024</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<InfoOutlineIcon />}
            variant='outline'
            borderRadius='full'
            px={6}
          >
            In-Person
          </MenuButton>
          <MenuList>
            <MenuItem>Online</MenuItem>
            <MenuItem>In-Person</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<FaUserCircle />}
            variant='outline'
            borderRadius='full'
            px={6}
          >
            Agile Health Insurance
          </MenuButton>
          <MenuList>
            <MenuItem>Option 1</MenuItem>
            <MenuItem>Option 2</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<FaMapMarkerAlt />}
            variant='outline'
            borderRadius='full'
            px={6}
          >
            46052
          </MenuButton>
          <MenuList>
            <MenuItem>46053</MenuItem>
            <MenuItem>46054</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  )
}

export default FilterOptions
