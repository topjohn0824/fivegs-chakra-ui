import { Box, Flex, Stack, Text, SimpleGrid } from '@chakra-ui/react';

const Grid = ({ children, title, description }) => {
 return (
  <>
   <Box p={4}>
    <Flex justifyContent='center'>
     <Stack spacing={2} justifyContent='center' alignItems='center'>
      <Text>{title}</Text>
      <Text>{description}</Text>
      <Flex>
       <SimpleGrid columns={3} spacingX={1} spacingY={1}>
        {children}
       </SimpleGrid>
      </Flex>
     </Stack>
    </Flex>
   </Box>
  </>
 );
};

export default Grid;
