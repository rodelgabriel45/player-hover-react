import { Link } from 'react-router-dom';

const RawgButton = () => {
  return (
    <button className='bg-amber-400 text-black font-medium hover:bg-amber-500 hover:scale-105 duration-75 transform transition-all ease-in-out rounded-md p-2'>
      <Link
        to='https://rawg.io/'
        target='_blank'
        rel='noopener noreferrer'
        className='w-1/2'
      >
        Check out RAWG
      </Link>
    </button>
  );
};

export default RawgButton;
