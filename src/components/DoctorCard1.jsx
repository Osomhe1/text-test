import {
  Box,
  Flex,
  Avatar,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Icon,
  Spacer,
  Alert,
  AlertIcon,
  Link,
  IconButton,
} from '@chakra-ui/react'
import { InfoIcon, StarIcon, CalendarIcon } from '@chakra-ui/icons'
import { FaHeart, FaMapMarkerAlt } from 'react-icons/fa'

const DoctorCard1 = ({
  name,
  specialty,
  location,
  rating,
  reviews,
  insurance,
  appointmentInfo,
  imageUrl,
}) => {
  return (
    <Box
      bg='white'
      p={5}
      borderRadius={20}
      border='1px'
      borderColor='gray.200'
      mb={5}
    >
      {appointmentInfo && (
        <Alert bgColor='yellow.100' status='info' mb={4} borderRadius={10}>
          <AlertIcon />
          <Text fontSize='sm'>
            {appointmentInfo}{' '}
            <Link href='#' textDecoration='underline'>
              View details
            </Link>
          </Text>
        </Alert>
      )}
      <Flex
        direction={{ base: 'column', md: 'row' }}
        alignItems={{ base: 'flex-start', md: 'center' }}
      >
        <Box position='relative' display='flex' alignItems='center'>
          <Avatar
            size={40}
            name={name}
            src={imageUrl || 'https://bit.ly/broken-link'}
            borderRadius={10}
          />
          <IconButton
            icon={<FaHeart />}
            variant='ghost'
            aria-label='Add to favorites'
            position='absolute'
            top={2}
            left={2}
          />
        </Box>
        <VStack
          align='start'
          ml={{ base: 0, md: 4 }}
          mt={{ base: 4, md: 0 }}
          flex='1'
          height='100%'
        >
          <Heading as='h3' size='md'>
            {name}
          </Heading>
          <Text fontSize='sm' color='gray.600'>
            {specialty}
          </Text>
          <HStack spacing={1}>
            <Icon as={FaMapMarkerAlt} color='gray.500' />
            <Text fontSize='sm' color='gray.600'>
              {location}
            </Text>
          </HStack>
          <HStack spacing={1}>
            <Icon as={StarIcon} color='yellow.400' />
            <Text fontSize='sm' color='gray.600'>
              {rating} ({reviews} reviews)
            </Text>
          </HStack>
          <Text fontSize='sm' color='gray.600'>
            {insurance}
          </Text>
        </VStack>
        <Spacer />
        <HStack spacing={4} mt={{ base: 4, md: 0 }}>
          <Button
            variant='outline'
            borderRadius='full'
            leftIcon={<InfoIcon />}
            size='sm'
          >
            More Info
          </Button>
          <Button
            leftIcon={<CalendarIcon />}
            borderRadius='full'
            colorScheme='blue'
            size='sm'
          >
            Book Again
          </Button>
        </HStack>
      </Flex>
    </Box>
  )
}

DoctorCard1.defaultProps = {
  name: 'Katherine Carroll, DO',
  specialty: 'Primary Care Doctor',
  location: '52037 Toney Neck Suite 296',
  rating: '5.0',
  reviews: '99',
  insurance: 'Dyson, and 2+ more insurance accepted',
  appointmentInfo: 'You have an existing appointment with this doctor.',
  imageUrl: '/images/Layer1@2x.png',
}

export default DoctorCard1
