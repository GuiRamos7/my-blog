import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react';

import SearchBox from './Search';
// import NotificationNav from './NotificationNav';
import Profile from './Profile';
import Logo from './Logo';
// import { useSidebarDrawer } from 'contexts/SidebarDrawerContext';
import { RiMenuLine } from 'react-icons/ri';

const Header = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  // const { onOpen } = useSidebarDrawer()

  return (
    <Flex
      maxWidth={1480}
      as='header'
      w='100%'
      h='20'
      mx='auto'
      mt='4'
      px='6'
      align='baseline'
    >
      {!isWideVersion && (
        <IconButton
          aria-label='Open navigation'
          mr='2'
          onClick={() => {}}
          fontSize='24'
          variant='unstyled'
          icon={<Icon as={RiMenuLine} />}
        />
      )}
      <Logo />
      <Flex align='center' ml='auto'>
        {isWideVersion && <SearchBox />}
        {/* <Profile showProfileData={isWideVersion} /> */}
      </Flex>
    </Flex>
  );
};

export default Header;
