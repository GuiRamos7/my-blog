import { Button, Flex, Text, Image } from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';

const asd = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      staggerChildren: 0.03,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const palavras =
  'Olá, sou Guilherme Ramos, atualmente trabalho como desenvolvedor Front-end, trabalho com isso desde 2018, adoro aprender tecnologias novas e com isso criei esse blog para compartilhar coisas que estou aprendendo. Quero que isso seja um diário para eu poder mostrar coisas incríveis da tecnologia. Mais sobre mim.';

const Main = () => {
  const randomNumber = Math.floor(Math.random() * (6 - 1 + 1) + 1);

  return (
    <Flex
      maxWidth={1480}
      as='main'
      w='100%'
      mx='auto'
      mt={['50px', '95px']}
      px='6'
      align='baseline'
      direction='column'
      position='relative'
    >
      <Flex w={['100%', '100%', 'auto', '700px']}>
        <Text
          as={motion.h1}
          variants={asd}
          initial='hidden'
          animate='visible'
          align={['start', 'justify']}
          fontSize={['xl', '3xl']}
          fontWeight='bold'
          color='blue.800'
          w='100%'
          className='load-screen--message'
        >
          {palavras.split('').map((char, idx) => {
            if (idx >= 9 && idx <= 23) {
              return (
                <Text
                  as={motion.span}
                  variants={letter}
                  key={`${char}-${idx}`}
                  color='white'
                  bg='purple.800'
                >
                  {char}
                </Text>
              );
            }

            return (
              <Text as={motion.span} variants={letter} key={`${char}-${idx}`}>
                {char}
              </Text>
            );
          })}
        </Text>

        <Image
          as={motion.img}
          right={[0, 0, 0, '-10', '25px']}
          position='absolute'
          src={`icon${randomNumber}.png`}
          w='400px'
          bg='linear-gradient(45deg, #a578e3, #44337a)'
          borderRadius='100%'
          p='32px 10px 0 31px'
          display={['none', 'none', 'none', 'block']}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0, 1],
            transition: { duration: 0.5 },
          }}
        />
      </Flex>
      <Button
        as={motion.button}
        mt='10'
        _hover={{
          opacity: 0.9,
        }}
        _active={{
          bg: 'purple.200',
        }}
        color='white'
        size='lg'
        bg='purple.800'
        animate={{
          y: [10, 0],
          opacity: [0, 1],
          transition: { duration: 0.5 },
        }}
      >
        More about me
      </Button>
    </Flex>
  );
};

export default Main;
