import { ThirdwebNftMedia, useContract, useContractMetadata, useNFTs } from "@thirdweb-dev/react";
import "./styles/Home.css";

export default function Home() {
  const { contract } = useContract('0x06Df1a3dfeb3BfBdAaC675F7eDC7541Dc01060F7');
  const { data: metadata, isLoading: loadingMetadata } = useContractMetadata(contract);
  const { data: nfts, isLoading } = useNFTs(contract);

  console.log(metadata);

  return (
    <main className="container">
      {!loadingMetadata &&
        <header className="heading">
          <div>
            <img src={metadata?.image} alt="NFT Collection Thumbnail" />
            <h1>{metadata?.name}</h1>
          </div>
        </header>
      }

      {!isLoading ?
      (<div className="gallery">
        {nfts?.map(e =>
          <div className="card">
            <ThirdwebNftMedia metadata={e.metadata} />
          </div>
        )}
      </div>)
      : (<p className="loading">Loading...</p>) }
    </main>
  );
}
