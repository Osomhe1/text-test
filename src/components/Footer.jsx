import {
  Box,
  Container,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box bg='gray.900' color='white' py={10}>
      <Container w='90%' maxW='containerxl'>
        <Flex justify='space-between' wrap='wrap'>
          <Box>
            <Heading as='h3' size='lg' mb={4} color='pink.500'>
              BookADoc
            </Heading>
            <Text maxW='400px'>
              BookADoc is a patient-friendly web & mobile application where
              patients can search and discover practitioners by illness,
              specialty, or name of the practitioner.
            </Text>
          </Box>

          <Stack spacing={3} align='start'>
            <Heading as='h4' size='md' mb={4}>
              SERVICES FOR PATIENTS
            </Heading>
            <Link href='#'>Doctor Search</Link>
            <Link href='#'>Appointment Booking</Link>
            <Link href='#'>Patient Reviews</Link>
          </Stack>

          <Stack spacing={3} align='start'>
            <Heading as='h4' size='md' mb={4}>
              SERVICES FOR DOCTORS
            </Heading>
            <Link href='#'>Profile Listing</Link>
            <Link href='#'>Appointment Management</Link>
            <Link href='#'>Patient Feedback</Link>
          </Stack>

          <Stack spacing={3} align='start'>
            <Heading as='h4' size='md' mb={4}>
              CONTACT
            </Heading>
            <Link href='tel:1-800-123-4567'>1-800-123-4567</Link>
            <Link href='mailto:help@bookadoc.com'>help@bookadoc.com</Link>
          </Stack>
        </Flex>

        <Text mt={10} fontSize='sm' textAlign='center'>
          &copy; {new Date().getFullYear()} BookADoc. All rights reserved.
          BookADoc is not responsible for any medical advice, diagnosis, or
          treatment provided by doctors listed on this site. Terms of Use and
          Privacy Policy apply.
        </Text>
      </Container>
    </Box>
  )
}

export default Footer
