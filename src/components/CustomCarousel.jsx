import React, { useState, useEffect } from 'react'
import { Box, Text, useBreakpointValue } from '@chakra-ui/react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const CustomCarousel = ({ days }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerSlide = useBreakpointValue({ base: 3, md: 6 })

  useEffect(() => {
    if (currentIndex >= Math.ceil(days.length / itemsPerSlide)) {
      setCurrentIndex(0)
    }
  }, [itemsPerSlide, days.length, currentIndex])

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const nextSlide = () => {
    if (currentIndex < Math.ceil(days.length / itemsPerSlide) - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const getVisibleItems = () => {
    const start = currentIndex * itemsPerSlide
    const end = start + itemsPerSlide
    return days.slice(start, end)
  }

  return (
    <Box position='relative' w='full' overflow='hidden'>
      <Box
        display='flex'
        transition='transform 0.5s'
        transform={`translateX(-${currentIndex * 100}%)`}
      >
        {getVisibleItems().map((day, idx) => (
          <Box
            key={idx}
            w={{ base: 'full', md: '1/6' }}
            bg='white'
            shadow='md'
            p={4}
            rounded='md'
            textAlign='center'
            m={2}
            flexDirection='column'
          >
            <Text fontWeight='bold' color='gray.600'>
              {day.day}
            </Text>
            {day.times.map((time, tIdx) => (
              <Text
                key={tIdx}
                fontWeight={time.bold ? 'bold' : 'normal'}
                color={time.bold ? 'blue.600' : 'gray.600'}
              >
                {time.time}
              </Text>
            ))}
          </Box>
        ))}
      </Box>
      <button
        className={`absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full ${
          currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        onClick={prevSlide}
        disabled={currentIndex === 0}
      >
        <FaChevronLeft />
      </button>
      <button
        className={`absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full ${
          currentIndex === Math.ceil(days.length / itemsPerSlide) - 1
            ? 'opacity-50 cursor-not-allowed'
            : ''
        }`}
        onClick={nextSlide}
        disabled={currentIndex === Math.ceil(days.length / itemsPerSlide) - 1}
      >
        <FaChevronRight />
      </button>
    </Box>
  )
}

export default CustomCarousel
