import { Flex, Text } from '@chakra-ui/react';
import { DarkModeSwitch } from '@components/DarkModeSwitch';
import Account from '@components/Account';
import useEagerConnect from '../../hooks/useEagerConnect';

export const Header = () => {
  const triedToEagerConnect = useEagerConnect();
  return (
    <Flex p={2} height="10vh">
      <Text position="fixed" top={4} left={4}>
        <Account triedToEagerConnect={triedToEagerConnect} />
      </Text>
      <DarkModeSwitch />
    </Flex>
  );
};
