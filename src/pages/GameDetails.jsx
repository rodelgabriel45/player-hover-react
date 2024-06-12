import { Link, useParams } from 'react-router-dom';
import useGetGameDetails from '../hooks/useGetGameDetails';
import LoadingSpinner from '../components/LoadingSpinner';
import { useState } from 'react';

const GameDetailsPage = () => {
  const { gameId } = useParams();
  const { loading, gameDetails } = useGetGameDetails(gameId);
  const [isExpanded, setIsExpanded] = useState(false);

  console.log(gameDetails);

  if (loading) {
    return (
      <div className='flex gap-2 text-2xl justify-center items-center h-screen'>
        <span>Loading</span>
        <LoadingSpinner size='lg' />
      </div>
    );
  }

  return (
    <div className='flex flex-col lg:flex-row justify-center items-center mt-5 p-4'>
      <div className='flex flex-col gap-4 max-w-6xl mx-auto'>
        <h1 className='text-2xl lg:text-4xl text-white'>{gameDetails.name}</h1>

        <div
          dangerouslySetInnerHTML={{ __html: gameDetails.description }}
          className={`${
            isExpanded ? '' : 'line-clamp-6'
          } text-xl text-gray-400`}
        />
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className='text-blue-500'
        >
          {isExpanded ? 'See less...' : 'See more...'}
        </button>

        <div className='mt-7 flex flex-col gap-3'>
          <h2 className='text-2xl text-white text-center border mx-auto px-4 py-2 rounded-md border-amber-500'>
            Genre:
          </h2>
          <ul className='flex text-lg gap-7 items-center justify-center list-disc'>
            {gameDetails?.genres?.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>

        <div className='flex flex-col xl:flex-row gap-2 max-w-6xl mx-auto'>
          <img
            src={gameDetails.background_image}
            alt={gameDetails.name}
            className='h-[20rem]'
          />
          <img
            src={gameDetails.background_image_additional}
            alt={gameDetails.name}
            className='h-[20rem]'
          />
        </div>

        <div className='mt-7 flex flex-col gap-4'>
          <h2 className='text-2xl text-white text-center border mx-auto px-4 py-2 rounded-md border-amber-500'>
            Publisher:
          </h2>
          <ul className='flex gap-7 items-center justify-center'>
            {gameDetails?.publishers?.map((publisher) => (
              <li key={publisher.id}>
                <span className='font-bold text-xl text-white'>
                  {publisher.name}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className='mt-7 flex flex-col gap-6 my-10'>
          <h2 className='text-2xl lg:text-4xl text-white text-center'>
            Available at:
          </h2>
          <ul className='flex flex-col lg:flex-row text-lg gap-7 items-center justify-center'>
            {gameDetails?.stores?.map((store) => {
              return store ? (
                <li key={store.store.id} className='hover:text-blue-500'>
                  <Link
                    to={`https://${store.store.domain}`}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {store.store.name}
                  </Link>
                </li>
              ) : (
                <p>No data found</p>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GameDetailsPage;
