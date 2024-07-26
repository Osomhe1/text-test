import { Box, Container } from '@chakra-ui/react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <Box minH='100vh' display='flex' flexDirection='column'>
      <Navbar />
      <Container w={'98%'} maxW='containerxl' py={10} flex='1'>
        {children}
      </Container>
      <Footer />
    </Box>
  )
}

export default Layout
