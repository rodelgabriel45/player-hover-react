import useFetchGames from '../hooks/useFetchGames';
import GameCard from './GameCard';
import LoadingSpinner from './LoadingSpinner';

const GameList = () => {
  const { loading, games } = useFetchGames();

  console.log(games);

  if (loading) {
    return (
      <div className='flex justify-center items-center h-screen gap-4 text-2xl'>
        <span>Loading</span>
        <LoadingSpinner size='lg' />
      </div>
    );
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 p-4'>
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
};

export default GameList;
