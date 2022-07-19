import { Box, Center, Flex, Image, Text, Badge, Grid } from '@chakra-ui/react';

const Post = () => {
  return (
    <Box
      borderColor='blue.800'
      borderRadius='20px'
      w='300px'
      maxW='300px'
      borderWidth='2px'
    >
      <Image
        w='100%'
        h='140px'
        objectFit='cover'
        borderRadius={'19px 19px 0 0'}
        src='https://bit.ly/2k1H1t6'
      />
      {/* <Flex p='4' gap='7px' mt={2}>
        <Badge width='fit-content' colorScheme='blue'>
          React
        </Badge>
      
      </Flex> */}
      <Flex direction='column' py='2' px='4'>
        <Text mt={2} fontSize='md' fontWeight='semibold' lineHeight='short'>
          React, Angular ou Vue - Qual Framework JavaScript escolheria hoje? 🤔{' '}
        </Text>
        <Text mt={2} color='gray.500' fontSize='sm' lineHeight='short'>
          Os Frameworks JavaScript mais relevantes do mercado já tem alguns anos
          de vida e hoje podemos dizer...{' '}
        </Text>
      </Flex>
      <Flex pb='4' px='4' gap='2'>
        <Badge borderRadius='5px' background='blue.100'>
          React
        </Badge>
        <Badge borderRadius='5px' background='pink.100'>
          Angular
        </Badge>
        <Badge borderRadius='5px' background='green.200'>
          Vue
        </Badge>
      </Flex>
    </Box>
  );
};

export default Post;
