import { Text, Heading } from '@chakra-ui/react';
const Home = () => {
  return (
    <div>
      Olá mundooo
      <Heading fontSize='xl' textDecoration='underline'>
        (6xl) In love with React & Next
      </Heading>
      <Heading
        background='green.200'
        display='inline'
        color='black'
        fontSize='xl'
      >
        (6xl) In love with React & Next
      </Heading>
      <Heading
        background='purple.200'
        display='inline'
        color='white'
        fontSize='xl'
      >
        (6xl) In love with React & Next
      </Heading>
      <Text fontSize='5xl' fontWeight='bold'>
        (5xl) In love with React & Next
      </Text>
      <Text fontSize='4xl'>(4xl) In love with React & Next</Text>
      <Text color='green.200' fontSize='3xl'>
        (3xl) In love with React & Next
      </Text>
      <Text fontSize='2xl'>(2xl) In love with React & Next</Text>
      <Text fontSize='xl'>(xl) In love with React & Next</Text>
      <Text fontSize='lg'>(lg) In love with React & Next</Text>
      <Text fontSize='md'>(md) In love with React & Next</Text>
      <Text fontSize='sm'>(sm) In love with React & Next</Text>
      <Text fontSize='xs'>(xs) In love with React & Next</Text>
    </div>
  );
};

export default Home;
