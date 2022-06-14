import Link from 'next/link';
import Image from 'next/image';
import { useColorModeValue } from '@chakra-ui/react';

const Logo = () => {
  const footPrintImg = `/images/footprint${useColorModeValue('', '-dark')}.png`;

  return (
    <Link href="/">
      <a>
        <Image src={footPrintImg} width={20} height={20} alt="logo" />
      </a>
    </Link>
  );
};

export default Logo;
