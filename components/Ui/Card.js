import { Box, Flex, Image, IconButton, Text } from '@chakra-ui/react';
import { CopyIcon } from '@chakra-ui/icons';

function Card() {
 return (
  <>
   <Box>
    <Flex justifyContent='center' alignItems='center' flexDirection='column'>
     <Box>
      <Image height='100px' width='100px' />
     </Box>
    </Flex>
    <Flex alignItems='flex-start' flexDirection='column'>
     <Text>Text value</Text>
     <Text>Text value</Text>
    </Flex>
    <Flex flexDirection='row' justifyContent='center' alignItems='center'>
     <IconButton aria-label='icon' icon={<CopyIcon />} size='md' />
     <IconButton aria-label='icon' icon={<CopyIcon />} size='md' />
    </Flex>
   </Box>
  </>
 );
}

export default Card;
