// import { HStack, Image, Text } from '@chakra-ui/react';
import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/Logo/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';

const NavBar = () => {
  return (
    <>
      <HStack justifyContent="space-between" padding={'0.625rem'}>
        <Image src={logo} boxSize={'3.75rem'}></Image>
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default NavBar;
