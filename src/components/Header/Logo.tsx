import { Text } from '@chakra-ui/react';

const Logo = () => {
  return (
    <Text
      fontSize={['2xl', '3xl']}
      fontWeight='bold'
      letterSpacing='tight'
      w='64'
    >
      guiramos
      <Text as='span' fontSize='5xl' color='purple.200'>
        .
      </Text>
      me
    </Text>
  );
};

export default Logo;
