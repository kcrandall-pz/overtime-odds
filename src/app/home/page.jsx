import dynamic from 'next/dynamic';
import Instructions from '../components/Instructions';
import HomeNews from './HomeNews';

// Dynamically import the ClientComponent to avoid marking the entire Home component as a client component
const ClientCheck = dynamic(() => import('../components/ClientCheck'), {
  ssr: false,
});

const Home = () => {
  return (
    <>
      <h1>Welcome to Overtime Odds</h1>
      <ClientCheck />
      <Instructions />
      <HomeNews />
    </>
  );
};

export default Home;
