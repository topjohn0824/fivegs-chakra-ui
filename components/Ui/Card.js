import NextLink from 'next/link';
import Image from 'next/image';
import {
 Heading,
 Box,
 Center,
 Text,
 Stack,
 Button,
 Badge,
 useColorModeValue,
} from '@chakra-ui/react';

export default function Card({
 title,
 content,
 tags,
 productlink,
 productpath,
 productbutton,
}) {
 return (
  <Center py={6}>
   <Box
    maxW={'320px'}
    w={'full'}
    bg={useColorModeValue('white', 'gray.900')}
    boxShadow={'2xl'}
    rounded={'lg'}
    p={6}
    textAlign={'center'}
   >
    <Image
     src='https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
     alt='Segun Adebayo'
     width={300}
     height={300}
     position='relative'
     rounded='lg'
    />
    <Heading fontSize={'2xl'} fontFamily={'body'}>
     {title}
    </Heading>
    <Text
     textAlign={'center'}
     color={useColorModeValue('gray.700', 'gray.400')}
     px={3}
     isTruncated
    >
     {content}
    </Text>

    <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
     <Badge
      px={2}
      py={1}
      bg={useColorModeValue('gray.50', 'gray.800')}
      fontWeight={'400'}
     >
      {tags}
     </Badge>
    </Stack>

    <Stack mt={8} direction={'row'} spacing={4}>
     <NextLink href={productpath}>
      <Button
       flex={1}
       fontSize={'sm'}
       rounded={'full'}
       _focus={{
        bg: 'gray.200',
       }}
      >
       See more...
      </Button>
     </NextLink>
     <NextLink href={productlink}>
      <Button
       flex={1}
       fontSize={'sm'}
       rounded={'full'}
       bg={'green.400'}
       color={'white'}
       boxShadow={
        '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
       }
       _hover={{
        bg: 'green.500',
       }}
       _focus={{
        bg: 'green.500',
       }}
      >
       Buy me!!
      </Button>
     </NextLink>
    </Stack>
   </Box>
  </Center>
 );
}
