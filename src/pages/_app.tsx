import { ChakraProvider } from '@chakra-ui/react'; // chakra provider traz todo seu CSS pra dentro da aplicação, eliminando o CSS padrão do navegador
import { Web3ReactProvider } from '@web3-react/core'; // provider for web3 ethers in react
import type { AppProps } from 'next/app'; // import only type of the AppProps
import getLibrary from '../../getLibrary';

// The type AppProps allows controller of initialization page and keeping state between navigation
const NextWeb3App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Component {...pageProps} />
      </Web3ReactProvider>
    </ChakraProvider>
  );
};

export default NextWeb3App;
