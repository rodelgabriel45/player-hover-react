import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Pagination from '../components/Pagination';
import LoadingSpinner from '../components/LoadingSpinner';
import GameCard from '../components/GameCard';

const SearchPage = () => {
  const [page, setPage] = useState(1);
  const { searchTerm } = useParams();
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const handleNext = () => {
    setPage((prevPage) => (prevPage += 1));
  };

  const handlePrev = () => {
    if (page === 1) {
      return null;
    }
    setPage((prevPage) => (prevPage -= 1));
  };

  useEffect(() => {
    const getSearchResults = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.rawg.io/api/games?key=${
            import.meta.env.VITE_RAWG_API_KEY
          }&search=${searchTerm}`
        );
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || data);
        }

        setSearchResults(data.results);
      } catch (error) {
        toast.error(error.message || error);
      } finally {
        setLoading(false);
      }
    };

    getSearchResults();
  }, [searchTerm]);

  console.log(searchResults);

  return (
    <div className='flex flex-col'>
      <div className='self-center mt-10 max-w-6xl mx-auto'>
        <h1 className='text-white lg:text-4xl'>Search Results</h1>
      </div>

      <div className='mt-16 mx-auto'>
        {loading ? (
          <div className='flex justify-center mt-16 gap-4 text-2xl'>
            <span>Loading</span>
            <LoadingSpinner size='lg' />
          </div>
        ) : (
          <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 p-4 items-center justify-center'>
              {searchResults?.map((game, index) => {
                return <GameCard key={game.id} game={game} />;
              })}
            </div>
            <Pagination
              page={page}
              handleNext={handleNext}
              handlePrev={handlePrev}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
