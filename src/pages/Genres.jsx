import { useParams } from 'react-router-dom';
import useGetGenreDetails from '../hooks/useGetGenreDetails';
import GameCard from '../components/GameCard';
import useFetchGames from '../hooks/useFetchGames';
import LoadingSpinner from '../components/LoadingSpinner';
import { useState } from 'react';

const GenresPage = () => {
  const [page, setPage] = useState(1);
  const { genreId } = useParams();
  const { loading: genreDetailLoading, genreDetail } =
    useGetGenreDetails(genreId);
  const { loading, games } = useFetchGames(page, genreId);

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
    <>
      <div className='card mt-10 mx-auto max-w-xl bg-base-100 shadow-xl image-full'>
        <figure>
          <img src={genreDetail.image_background} alt={genreDetail.name} />
        </figure>
        <div className='card-body'>
          <h2 className='card-title self-center text-white lg:text-4xl'>
            {genreDetail.name}
          </h2>
          <div
            dangerouslySetInnerHTML={{ __html: genreDetail.description }}
            className='line-clamp-6 text-xl text-gray-300'
          />
        </div>
      </div>

      <div className='p-4 flex items-center justify-center'>
        {loading ? (
          <div className='flex justify-center mt-16 gap-4 text-2xl'>
            <span>Loading</span>
            <LoadingSpinner size='lg' />
          </div>
        ) : (
          <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 p-4 items-center justify-center'>
              {games.map((game, index) => {
                return <GameCard key={game.id} game={game} />;
              })}
              <div className='mt-10 join'>
                <button
                  disabled={page === 1}
                  onClick={handlePrev}
                  className='join-item btn btn-lg'
                >
                  «
                </button>
                <button className='join-item btn btn-lg'>Page {page}</button>
                <button onClick={handleNext} className='join-item btn btn-lg'>
                  »
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default GenresPage;
