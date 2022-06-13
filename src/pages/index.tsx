import React from 'react';
import { Container } from '@chakra-ui/react';
import { useWeb3React } from '@web3-react/core';
import Head from 'next/head'; // alterações no cabecalho específico por página
import Account from '@components/Account';
import ETHBalance from '@components/ETHBalance';
import TokenBalance from '@components/TokenBalance';
import useEagerConnect from '../../hooks/useEagerConnect';

const DAI_TOKEN_ADDRESS = '0x6b175474e89094c44da98b954eedeac495271d0f';

function Home() {
  const { account, library } = useWeb3React();

  const triedToEagerConnect = useEagerConnect();

  const isConnected = typeof account === 'string' && !!library;

  return (
    <div>
      <Head>
        <title>WEB3</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <p>WEB3</p>

        <Account triedToEagerConnect={triedToEagerConnect} />
      </Container>
      <h1>
        Welcome to{' '}
        <a href="https://github.com/mirshko/next-web3-boilerplate">WEB3</a>
      </h1>

      {isConnected && (
        <>
          <ETHBalance />

          <TokenBalance tokenAddress={DAI_TOKEN_ADDRESS} symbol="DAI" />
        </>
      )}
    </div>
  );
}

export default Home;
