import Image from 'next/image';

const Logo = () => {
  const footPrintImg = `/skyDan.png`;
  return (
    <a>
      <Image src={footPrintImg} width={35} height={35} alt="logo" />
    </a>
  );
};

export default Logo;
