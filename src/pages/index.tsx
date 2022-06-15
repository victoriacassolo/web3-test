import React from 'react';
import { Container, Heading, VStack, Button } from '@chakra-ui/react';
import { useWeb3React } from '@web3-react/core';
import Head from 'next/head'; // alterações no cabecalho específico por página
import ETHBalance from '@components/ETHBalance';
import TokenBalance from '@components/TokenBalance';
import NavBar from '@components/NavBar';

const DAI_TOKEN_ADDRESS = '0x6b175474e89094c44da98b954eedeac495271d0f';

function Home() {
  const { account, library } = useWeb3React();

  const isConnected = typeof account === 'string' && !!library;

  return (
    <>
      <Head>
        <title>WEB3 - Chakra and Next</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Container maxW="container.xl" p={4}>
        <VStack>
          <Heading>
            Welcome to{' '}
            <a href="https://github.com/mirshko/next-web3-boilerplate">WEB3</a>
          </Heading>
          {isConnected && (
            <>
              <ETHBalance />

              <TokenBalance tokenAddress={DAI_TOKEN_ADDRESS} symbol="DAI" />
            </>
          )}
        </VStack>
      </Container>
    </>
  );
}

export default Home;
