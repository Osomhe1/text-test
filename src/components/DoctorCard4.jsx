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
  Divider,
  IconButton,
} from '@chakra-ui/react'
import { InfoIcon, StarIcon, CalendarIcon } from '@chakra-ui/icons'
import { FaHeart, FaMapMarkerAlt } from 'react-icons/fa'
import CustomCarousel from './CustomCarousel'

const DoctorCard4 = ({
  name,
  specialty,
  location,
  rating,
  reviews,
  insurance,
  days,
  imageUrl,
}) => {
  return (
    <Box
      bg='white'
      p={5}
      borderRadius='md'
      boxShadow='md'
      border='1px'
      borderColor='gray.200'
      mb={5}
    >
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
            height='auto'
            width='auto'
          />
          <IconButton
            icon={<FaHeart />}
            colorScheme='pink'
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
            {rating ? (
              <>
                <Icon as={StarIcon} color='yellow.400' />
                <Text fontSize='sm' color='gray.600'>
                  {rating} ({reviews} reviews)
                </Text>
              </>
            ) : (
              <Text fontSize='sm' color='gray.600'>
                No reviews yet
              </Text>
            )}
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
            colorScheme='teal'
            size='sm'
          >
            Book Appointment
          </Button>
        </HStack>
      </Flex>
      <Divider my={4} />
      <Box>
        <CustomCarousel days={days} />
      </Box>
    </Box>
  )
}

DoctorCard4.defaultProps = {
  name: 'Chris Riya',
  specialty: 'Primary Care Doctor',
  location: '52037 Toney Neck Suite 296',
  rating: '',
  reviews: '',
  imageUrl: 'https://via.placeholder.com/150',
  insurance: 'Dyson, and 2+ more insurance accepted',
  days: [
    { day: 'MON 8', times: [{ time: '8:00 AM' }] },
    {
      day: 'TUE 9',
      times: [{ time: '8:00 AM' }, { time: '9:00 AM', bold: true }],
    },
    { day: 'WED 10', times: [{ time: '8:00 AM' }] },
    { day: 'THU 11', times: [{ time: '8:00 AM' }] },
    { day: 'FRI 12', times: [{ time: '8:00 AM' }] },
    { day: 'SUN 13', times: [{ time: '' }] },
    { day: 'SAT 14', times: [{ time: '' }] },
  ],
}

export default DoctorCard4
