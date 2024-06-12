import { FcRating } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const GameCard = ({ game }) => {
  return (
    <div className='card w-[20rem] h-[26rem] glass cursor-pointer group/card transition-all transform ease-in-out hover:scale-105'>
      <figure>
        <img
          src={game.background_image}
          alt='car!'
          className='h-60 w-full object-cover'
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title text-[#fff]'>{game.name}</h2>
        <hr className='border-teal-500' />
        <div className='flex flex-wrap justify-center items-center gap-4 w-full max-w-4xl'>
          {game.parent_platforms.map((item) => (
            <p className='w-15' key={game.id + item.platform.id}>
              {item.platform.name}
            </p>
          ))}
        </div>

        <p className='flex items-center gap-2 justify-center text-xl mt-5 group-hover/card:hidden'>
          <FcRating />
          Rating:{' '}
          <span className='font-medium text-amber-500'>{game.rating}</span>{' '}
        </p>
        <Link
          to={`/games/${game.id}`}
          className='hidden mt-5 text-center opacity-100 bg-amber-500 text-white self-center rounded-md w-32 p-2 font-medium hover:bg-amber-600 group-hover/card:inline'
        >
          See more...
        </Link>
      </div>
    </div>
  );
};

export default GameCard;
