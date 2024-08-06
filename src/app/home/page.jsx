
import dynamic from 'next/dynamic';
import Instructions from '../components/Instructions';
import HomeNews from './HomeNews';

// Dynamically import the ClientCheck component to avoid SSR issues
const ClientCheck = dynamic(() => import('../components/ClientCheck'), { ssr: false });

const Home = () => {
  return (
    <>
      <h1>Welcome to Overtime Odds</h1>
      <ClientCheck>
        <Instructions />
        <HomeNews />
      </ClientCheck>
    </>
  );
};

export default Home;
