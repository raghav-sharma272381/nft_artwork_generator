import nft1 from '../../../assets/nfts/nft1.jpeg';
import nft2 from '../../../assets/nfts/nft2.png';
import nft3 from '../../../assets/nfts/nft3.jpeg';
import nft4 from '../../../assets/nfts/nft4.png';
import nft5 from '../../../assets/nfts/nft5.jpeg';
import nft6 from '../../../assets/nfts/nft6.png';
import nft7 from '../../../assets/nfts/nft7.jpeg';
import nft8 from '../../../assets/nfts/nft8.jpeg';
import nft9 from '../../../assets/nfts/nft9.jpeg';

export const RandomNFTValues = ({ index }: { index: number }) => {
  const nfts = [
    { image: nft1, title: 'FRANKLIN NFT' },
    { image: nft2, title: 'SMOKIN GOOGLES' },
    { image: nft3, title: 'MONKEY GOOGLES' },
    { image: nft4, title: 'SPORT MONKEY' },
    { image: nft5, title: 'HELICOPTER MONKEY' },
    { image: nft6, title: 'PIXELATED MONKEY' },
    { image: nft7, title: 'LASER MONKEY' },
    { image: nft8, title: 'CIGAR MONKEY' },
    { image: nft9, title: 'GOLD MONKEY' },
  ];
  const nftObject = nfts[index];
  return (
    <div className="w-full text-center mt-10">
      <img className="min-w-[200px] h-[400px] object-contain w-1/2 m-auto" src={nftObject.image} />
      <p className="mt-3 text-white text-xl font-medium">Horray you got the {nftObject.title}</p>
    </div>
  );
};
