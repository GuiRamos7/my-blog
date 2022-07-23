import { Text, Flex } from '@chakra-ui/react';
import { Header, Main, Post } from 'components';
const Home = () => {
  return (
    <Flex h='100vh' direction='column'>
      <Header />
      <Main />
      {/* <Flex ml='2' gap='16px'>
        <Post />
        <Post />
      </Flex> */}
    </Flex>
  );
};

export default Home;
