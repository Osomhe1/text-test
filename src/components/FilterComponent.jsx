import {
  Box,
  VStack,
  Heading,
  RadioGroup,
  Radio,
  Checkbox,
  Stack,
  Text,
  Button,
  Select,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from '@chakra-ui/react'
import { FaMapMarkerAlt } from 'react-icons/fa'

const FilterComponent = () => {
  return (
    <Box
      w='100%'
      bg='white'
      p={5}
      borderRadius='md'
      boxShadow='md'
      width='100%'
    >
      <Box mb={4}>
        <img src='https://via.placeholder.com/150' alt='Map' />
        <Button
          leftIcon={<FaMapMarkerAlt />}
          colorScheme='gray'
          variant='outline'
          mt={2}
          width='100%'
        >
          View in a map
        </Button>
      </Box>

      <Heading as='h4' size='md' mb={4}>
        All Filter
      </Heading>

      <VStack align='start' spacing={4} width='100%'>
        <Box width='100%'>
          <Text mb={2} fontWeight='bold'>
            Preferred Time
          </Text>
          <Stack>
            <Checkbox>Early Morning (Before 9am)</Checkbox>
            <Checkbox>Morning (9am - noon)</Checkbox>
            <Checkbox>Afternoon (Noon - 4pm)</Checkbox>
            <Checkbox>Evening (After 4pm)</Checkbox>
          </Stack>
        </Box>

        <Box width='100%'>
          <Text mb={2} fontWeight='bold'>
            Provider Gender
          </Text>
          <RadioGroup defaultValue='No Preference'>
            <Stack>
              <Radio value='No Preference'>No Preference</Radio>
              <Radio value='Male'>Male</Radio>
              <Radio value='Female'>Female</Radio>
            </Stack>
          </RadioGroup>
        </Box>

        <Box width='100%'>
          <Text mb={2} fontWeight='bold'>
            Visit Reason
          </Text>
          <Select placeholder='Select reason' width='100%'>
            <option value='anxiety'>Anxiety</option>
            <option value='alcoholism'>Alcoholism</option>
          </Select>
        </Box>

        <Box width='100%'>
          <Text mb={2} fontWeight='bold'>
            Specialty
          </Text>
          <Select placeholder='Select specialty' width='100%'>
            <option value='addiction'>Addiction</option>
            <option value='psychology'>Psychology</option>
          </Select>
        </Box>

        <Box width='100%'>
          <Text mb={2} fontWeight='bold'>
            Rating / Review
          </Text>
          <Slider
            aria-label='rating-slider'
            defaultValue={3}
            min={1}
            max={5}
            step={1}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb boxSize={6}>
              <Box color='tomato' as='span' />
            </SliderThumb>
          </Slider>
          <Text mt={2}>4+</Text>
        </Box>

        <Box width='100%'>
          <Text mb={2} fontWeight='bold'>
            Language Spoken
          </Text>
          <Select placeholder='Select language' width='100%'>
            <option value='english'>English</option>
            <option value='deutsch'>Deutsch</option>
          </Select>
        </Box>
      </VStack>
    </Box>
  )
}

export default FilterComponent
