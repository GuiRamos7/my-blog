import { Flex, Text } from '@chakra-ui/react';

const Main = () => {
  return (
    <Flex
      // maxWidth={1480}
      as='main'
      w={['700px']}
      // h={['500px']}
      // mx='auto'
      // mt='4'
      // px='6'
      // m='6'
      bg='blue.800'
      // alignSelf='center'
    >
      <Text fontSize={['3xl']} fontWeight='bold' color='white'>
        Olá, sou Guilherme Ramos, atualmente trabalho como desenvolvedor
        Front-end, trabalho com isso desde 2018, adoro aprender tecnologias
        novas e com isso criei esse blog para compartilhar coisas que estou
        aprendendo. Quero que isso seja um diário para eu poder mostrar coisas
        incríveis da tecnologia. Mais sobre mim.
      </Text>
    </Flex>
  );
};

export default Main;
