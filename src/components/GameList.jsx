import { Link } from 'react-router-dom';
import useFetchGames from '../hooks/useFetchGames';
import FeatureCard from './FeatureCard';
import GameCard from './GameCard';
import LoadingSpinner from './LoadingSpinner';

import { FaCheck } from 'react-icons/fa6';
import { useState } from 'react';

const GameList = () => {
  const [page, setPage] = useState(1);
  const { loading, games } = useFetchGames(page);

  const handleNext = () => {
    setPage((prevPage) => (prevPage += 1));
  };

  const handlePrev = () => {
    if (page === 1) {
      return null;
    }
    setPage((prevPage) => (prevPage -= 1));
  };

  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex flex-col lg:flex-row gap-2'>
        <div className='max-w-xl'>
          <h1 className='text-2xl lg:text-4xl'>
            Discover, play, and rate your next favorite game all in one place!
          </h1>
          <ul className='flex flex-col gap-2 mt-10 text-lg lg:text-xl mb-10'>
            <li className='flex gap-2 items-center'>
              <FaCheck className='text-green-500' /> Search games by name
            </li>
            <li className='flex gap-2 items-center'>
              <FaCheck className='text-green-500' /> Find latest and hottest
              games
            </li>
            <li className='flex gap-2 items-center'>
              <FaCheck className='text-green-500' /> Search by genres and game
              developers games
            </li>
            <li className='flex gap-2 items-center'>
              <FaCheck className='text-green-500' /> All in one web app for all
              games
            </li>
          </ul>
          <button className='bg-amber-400 text-black font-medium hover:bg-amber-500 hover:scale-105 duration-75 transform transition-all ease-in-out rounded-md p-2'>
            <Link to='https://rawg.io/'>Check out RAWG</Link>
          </button>
        </div>
        <FeatureCard />
      </div>

      {loading ? (
        <div className='flex justify-center mt-16 gap-4 text-2xl'>
          <span>Loading</span>
          <LoadingSpinner size='lg' />
        </div>
      ) : (
        <>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 p-4 items-center justify-center'>
            {games.map((game, index) => {
              if (index === 0) return null;
              return <GameCard key={game.id} game={game} />;
            })}
          </div>
          <div className='mt-10 join'>
            <button
              disabled={page === 1}
              onClick={handlePrev}
              className='join-item btn'
            >
              «
            </button>
            <button className='join-item btn'>Page {page}</button>
            <button onClick={handleNext} className='join-item btn'>
              »
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default GameList;
