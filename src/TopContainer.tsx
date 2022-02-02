import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { uauth } from './config/unstoppableDomain';

type Props = {
  title: string;
  description?: string;
  // eslint-disable-next-line no-undef
  children?: JSX.Element;
  pageTitle?: string;
};

const SERVICE_NAME = 'NFT GENERATOR';

export const Container = ({ title, description, children }: Props) => {
  const [profile, setProfile] = useState<any>(null);
  const fetchUser = () => {
    uauth
      .user()
      .then((data) => {
        if (data) {
          setProfile(data);
        } else {
          setProfile(false);
        }
      })
      .catch((_err) => {});
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div>
      <Helmet>
        <title>{`${title} | ${SERVICE_NAME}`}</title>
        <meta name="description" content={description ?? `This is ${SERVICE_NAME}`} />
        <meta property="og:title" content={`${title} | ${SERVICE_NAME}`} />
        <meta property="og:description" content={description ?? `This is ${SERVICE_NAME}`} />
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="navbar overflow-hidden items-center shadow-lg w-screen justify-between bg-green-500 text-neutral-content rounded-none">
        <div className="flex-none px-1 ">
          <span className="text-xl font-extrabold customFont">GENERATE NFTS !</span>
        </div>
        <div className="items-end px-1 mx-2">
          <div className="items-stretch flex">{profile && <p>Username : {profile?.sub}</p>}</div>
        </div>
      </div>
      {children}
    </div>
  );
};
