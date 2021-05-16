import NextLink from 'next/link';
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

const navLinks = [
 {
  title: 'Home',
  path: '/',
 },
 {
  title: 'Product',
  path: '/product',
 },
 {
  title: 'About Us',
  path: '/about-us',
 },
 {
  title: 'Contact Us',
  path: '/contact-us',
 },
];
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
      <Box>
       <NextLink href='/'>
        <a>FiveGiftShop</a>
       </NextLink>
      </Box>
      <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
       {navLinks &&
        navLinks.map((links, index) => (
         <NextLink key={index} href={links.path}>
          <Link
           px={2}
           py={1}
           rounded={'md'}
           _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
           }}
          >
           {links.title}
          </Link>
         </NextLink>
        ))}
      </HStack>
     </HStack>
     <Flex alignItems={'center'}>
      <DarkModeSwitch />
     </Flex>
    </Flex>

    {isOpen ? (
     <Box pb={4} display={{ md: 'none' }}>
      <Stack as={'nav'} spacing={4}>
       {navLinks &&
        navLinks.map((links, index) => (
         <NextLink key={index} href={links.path}>
          <Link
           px={2}
           py={1}
           rounded={'md'}
           _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
           }}
          >
           {links.title}
          </Link>
         </NextLink>
        ))}
      </Stack>
     </Box>
    ) : null}
   </Box>
  </>
 );
}
