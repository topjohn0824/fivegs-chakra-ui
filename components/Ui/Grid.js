import { Box, Flex, VStack, Text, SimpleGrid, Heading } from '@chakra-ui/react';

const Grid = ({ children, title, description }) => {
 return (
  <>
   <Box p={4}>
    <Flex justifyContent='center'>
     <VStack spacing={2} textAlign='center'>
      <Heading as='h1' fontSize='4xl'>
       {title}
      </Heading>
      <Text fontSize='lg' color={'gray.500'}>
       {description}
      </Text>
      <Flex>
       <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        {children}
       </SimpleGrid>
      </Flex>
     </VStack>
    </Flex>
   </Box>
  </>
 );
};

export default Grid;
