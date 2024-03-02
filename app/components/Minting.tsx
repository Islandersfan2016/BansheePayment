import React from "react";
import Image from "next/image";

interface MintingProps {
  orderIdentifier: string;
}

const Minting: React.FC<MintingProps> = ({ orderIdentifier }) => {
  return (
    <div className="text-black font-mono p-5 text-center">
      <h3>Minting your NFT...</h3>
      <Image
        src="/sphere.gif"
        width={256}
        height={256}
        className="shrink mx-auto mt-10"
        alt="processing animation"
      />
    </div>
  );
};

export default Minting;
