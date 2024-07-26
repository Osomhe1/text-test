// components/HeaderComponent.js
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  HStack,
  VStack,
  Stack,
} from '@chakra-ui/react'
import FilterOptions from './FilterOptions'

const HeaderComponent = () => {
  return (
    <Box p={5} borderRadius='md' mb={5}>
      <Heading as='h1' size='lg' mb={2}>
        <Text as='span' color='pink.500'>
          Migraine
        </Text>{' '}
        Illness with{' '}
        <Text as='span' color='pink.500'>
          Agile Health Insurance
        </Text>
      </Heading>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        justifyContent='space-between'
        spacing={4}
        mb={4}
      >
        <FilterOptions />
        <Button variant='link' colorScheme='blue'>
          Clear All Filters
        </Button>
      </Stack>
      <Text fontWeight='bold'>100+ Results</Text>
    </Box>
  )
}

export default HeaderComponent
