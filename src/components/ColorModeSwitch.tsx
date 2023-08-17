// import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react';
import { HStack, Switch, useColorMode } from '@chakra-ui/react';
import { FcNightLandscape } from 'react-icons/fc';

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <>
      <HStack>
        <Switch
          colorScheme="pink"
          isChecked={colorMode === 'dark'}
          onChange={toggleColorMode}
        ></Switch>
        <FcNightLandscape />
        {/* <Text>Dark Mode</Text> */}
      </HStack>
    </>
  );
};

export default ColorModeSwitch;
