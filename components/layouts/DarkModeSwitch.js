import { useColorMode, IconButton } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const DarkModeSwitch = () => {
 const { colorMode, toggleColorMode } = useColorMode();
 const iconColor = {
  light: 'white',
  dark: 'black',
 };
 return (
  <IconButton
   aria-label='Toggle dark mode'
   icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
   onClick={toggleColorMode}
   color={iconColor[colorMode]}
   colorScheme='green'
  />
 );
};

export default DarkModeSwitch;
