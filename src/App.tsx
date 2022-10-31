import { ThirdwebNftMedia, useContract, useContractMetadata, useNFTs } from "@thirdweb-dev/react";
import "./styles/Home.css";

export default function Home() {
  const { contract } = useContract('0x73A236dF9b63ea5aB9baaC4BdA2Fc5B93A849425');
  const { data: metadata, isLoading: loadingMetadata } = useContractMetadata(contract);
  const { data: nfts, isLoading } = useNFTs(contract);

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
