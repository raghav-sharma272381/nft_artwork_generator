import { uauth } from '../../config/unstoppableDomain';

export function Hero() {
  const login = () => uauth.login();
  return (
    <>
      <img
        src="https://cdn.arstechnica.net/wp-content/uploads/2021/03/nft-explainer-feature.jpg"
        className="absolute z-[-10] w-screen min-w-full h-screen object-cover"
      />
      <div className="hero min-h-screen">
        <div className="hero-overlay bg-opacity-60" />
        <div className="text-center hero-content text-neutral-content">
          <div className="max-w-md transition-all">
            <h1 className="mb-5 text-6xl font-bold customFont text-white">GENERATE RANDOM NFTS FOR FUN 😏</h1>
            <h1 className="mb-5 text-md font-semibold customFont">Welcome to the metaverse</h1>
            <button onClick={login} className="btn hover:scale-110 mt-3 hover:bg-green-500 bg-green-500">
              Login with Unstoppable
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
