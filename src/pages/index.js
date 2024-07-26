import Layout from '../components/Layout'
import { Box, SimpleGrid } from '@chakra-ui/react'
import DoctorCard3 from '@/components/DoctorCard3'
import DoctorCard2 from '@/components/DoctorCard2'
import DoctorCard1 from '@/components/DoctorCard1'
import DoctorCard4 from '@/components/DoctorCard4'
import FilterComponent from '@/components/FilterComponent'
import HeaderComponent from '@/components/HeaderComponent'

const Home = () => {
  return (
    <Layout>
      <Box
        bg='gray.100'
        px={{ base: 0, md: 8 }}
        py={{ base: 4, md: 8 }}
        borderRadius={30}
      >
        <HeaderComponent />
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10} mt={5}>
          <Box gridColumn='span 3'>
            <Box display='grid' gap={5} mt={5}>
              <DoctorCard1 />
              <DoctorCard2 />
              <DoctorCard3 />
              <DoctorCard4 />
            </Box>
          </Box>
          <Box mt={5} gridColumn={{ base: 'span 3', md: 'span 1' }}>
            <FilterComponent />
          </Box>
        </SimpleGrid>
      </Box>
    </Layout>
  )
}

export default Home
