// components/Navbar.js
import {
  Box,
  Flex,
  Heading,
  HStack,
  Input,
  Button,
  Link,
  Spacer,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Stack,
} from '@chakra-ui/react'
import { ChevronDownIcon, SearchIcon } from '@chakra-ui/icons'
import {
  FaSearch,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaUserCircle,
} from 'react-icons/fa'

const Navbar = () => {
  return (
    <Box
      w={{ base: '95%', md: '97%' }}
      mx='auto'
      mt={4}
      bgGradient='linear(to-r, pink.100, white)'
      p={4}
      borderRadius={20}
    >
      <Flex
        py={3}
        alignItems='center'
        justifyContent='space-between'
        flexWrap='wrap'
      >
        <HStack spacing={4}>
          <Avatar
            size='sm'
            name='BookADoc'
            bg='pink.500'
            icon={<FaUserCircle />}
          />
          <Heading as='h1' size='md'>
            BookADoc
          </Heading>
        </HStack>
        <Spacer />
        <HStack spacing={4} display={{ base: 'none', md: 'flex' }}>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              variant='link'
            >
              Services
            </MenuButton>
            <MenuList>
              <MenuItem>Service 1</MenuItem>
              <MenuItem>Service 2</MenuItem>
              <MenuItem>Service 3</MenuItem>
            </MenuList>
          </Menu>
          <Link href='#'>About Us</Link>
          <Link href='#'>Blog</Link>
          <Link href='#'>Contact Us</Link>
        </HStack>
        <Spacer />
        <HStack spacing={4} display={{ base: 'none', md: 'flex' }}>
          <Button variant='link'>Sign In</Button>
          <Button colorScheme='pink' borderRadius='full'>
            Clinic Sign Up
          </Button>
        </HStack>
        <Flex
          mt={4}
          pt={4}
          alignItems='center'
          justifyContent='center'
          width='100%'
        >
          <HStack
            className='bg-none md:bg-white'
            p={2}
            borderRadius='full'
            spacing={4}
            width={{ base: '100%', md: '70%' }}
            justifyContent='space-between'
            flexWrap='wrap'
          >
            <HStack
              className='bg-white md:bg-none py-2 px-2 rounded-full md:py-0 md:px-0 md:rounded-none'
              spacing={2}
              width={{ base: '100%', md: 'auto' }}
            >
              <FaSearch />
              <Input
                placeholder='Migraine'
                variant='unstyled'
                width={{ base: 'auto', md: '150px' }}
              />
            </HStack>
            <HStack
              className='bg-white md:bg-none py-2 px-2 rounded-full md:py-0 md:px-0 md:rounded-none'
              spacing={2}
              width={{ base: '100%', md: 'auto' }}
            >
              <FaMapMarkerAlt />
              <Input
                placeholder='46052'
                variant='unstyled'
                width={{ base: 'auto', md: '150px' }}
              />
            </HStack>
            <HStack
              className='bg-white md:bg-none py-2 px-2 rounded-full md:py-0 md:px-0 md:rounded-none'
              spacing={2}
              width={{ base: '100%', md: 'auto' }}
            >
              <FaShieldAlt />
              <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                  variant='unstyled'
                  fontWeight='normal'
                  textAlign='left'
                  minWidth='200px'
                  height='auto'
                  pl={0}
                >
                  Agile Health Insurance
                </MenuButton>
                <MenuList>
                  <MenuItem>Option 1</MenuItem>
                  <MenuItem>Option 2</MenuItem>
                </MenuList>
              </Menu>
            </HStack>
            <Button
              colorScheme='pink'
              borderRadius='full'
              px={6}
              width={{ base: '100%', md: 'auto' }}
            >
              Search
            </Button>
          </HStack>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Navbar
