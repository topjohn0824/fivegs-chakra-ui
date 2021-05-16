import {
 Box,
 Flex,
 HStack,
 Link,
 IconButton,
 useDisclosure,
 useColorModeValue,
 Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import DarkModeSwitch from './DarkModeSwitch';

export default function Navbar() {
 const { isOpen, onOpen, onClose } = useDisclosure();

 return (
  <>
   <Box bg={useColorModeValue('white', 'gray.900')} px={4} boxShadow='base'>
    <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
     <IconButton
      size={'md'}
      icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
      aria-label={'Open Menu'}
      display={{ md: 'none' }}
      onClick={isOpen ? onClose : onOpen}
     />
     <HStack spacing={8} alignItems={'center'}>
      <Box>FiveGiftShop</Box>
      <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
       <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
         textDecoration: 'none',
         bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={'#'}
       >
        hello
       </Link>
      </HStack>
     </HStack>
     <Flex alignItems={'center'}>
      <DarkModeSwitch />
     </Flex>
    </Flex>

    {isOpen ? (
     <Box pb={4} display={{ md: 'none' }}>
      <Stack as={'nav'} spacing={4}>
       <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
         textDecoration: 'none',
         bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={'#'}
       >
        hello
       </Link>
      </Stack>
     </Box>
    ) : null}
   </Box>
  </>
 );
}
