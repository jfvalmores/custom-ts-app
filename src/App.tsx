import { Box, ChakraProvider, Heading } from '@chakra-ui/react';
import * as React from 'react';
import * as theme from './utils/Themes';
import CustomerList from './master/customer/CustomerList';
import ProductList from './master/product/ProductList';

const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box bg='azure' w='100%' p='5rem'>
        <Heading as='h1' size='2xl' m='.3em 0'>
          Hello world! This is my app.
        </Heading>
        <ProductList />
        <CustomerList />
      </Box>
    </ChakraProvider>
  );
};

export default App;
