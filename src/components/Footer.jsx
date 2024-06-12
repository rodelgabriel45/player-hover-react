import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-[#0F0F1B] h-[10rem] p-4 w-full bottom-0 absolute'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex justify-between items-center'>
          <h1 className='text-xl lg:text-2xl drop-shadow-md font-medium'>
            {' '}
            <span className='text-amber-500 font-bold'>Play</span>erH
            <span className='text-amber-500 font-bold'>over</span>{' '}
          </h1>

          <div>
            <Link
              to='https://rawg.io/'
              target='_blank'
              rel='noopener noreferrer'
              className='w-1/2 text-blue-400 hover:underline'
            >
              Check out RAWG
            </Link>
          </div>
        </div>

        <div className='flex flex-col justify-center items-center text-md mt-14'>
          <p>&copy; 2024. All rights reserved.</p>
          <p>
            Built with ♥ by{' '}
            <Link
              to='https://rodel-gabriel.onrender.com/'
              className='text-blue-400 hover:underline'
              target='_blank'
              rel='noopener noreferrer'
            >
              Rodel Gabriel
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
