import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineSearch } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import useGetGenres from '../hooks/useGetGenres';
import useGetPublishers from '../hooks/useGetPublishers';
import toast from 'react-hot-toast';

const Header = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const { loading, genres } = useGetGenres();
  const { loading: getCreatorsLoading, publishers } = useGetPublishers();
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!search) {
      toast.error('Enter a search item');
      return null;
    }

    navigate(`/search/${search}`);
  };

  return (
    <header className='bg-[#0F0F1B] p-4 shadow-md top-0 absolute w-full'>
      <nav className='flex justify-between items-center max-w-5xl mx-auto'>
        <Link to='/'>
          <h1 className='text-2xl lg:text-4xl drop-shadow-md font-medium'>
            {' '}
            <span className='text-amber-500 font-bold'>Play</span>erH
            <span className='text-amber-500 font-bold'>over</span>{' '}
          </h1>
        </Link>
        <form>
          <div className='relative flex justify-end text-black'>
            <input
              type='text'
              className='bg-[#fff] px-3 p-1 rounded-md max-w-[100rem] text-xs lg:text-lg'
              placeholder='Search Games...'
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <button
              onClick={handleSearch}
              className='text-xl lg:text-2xl absolute inset-y-0 mr-2 '
            >
              <MdOutlineSearch />
            </button>
          </div>
        </form>

        <div>
          <ul className='hidden lg:flex gap-2 items-center'>
            <li>
              <div className='dropdown dropdown-hover'>
                <div
                  tabIndex={0}
                  role='div'
                  className='btn m-1 bg-transparent border-none text-2xl'
                >
                  Genres
                </div>
                <ul
                  tabIndex={0}
                  className='dropdown-content z-50 menu p-2 shadow bg-base-100 rounded-box w-52'
                >
                  {genres.map((genre) => (
                    <li key={genre.id}>
                      <Link to={`/genres/${genre.id}`}>{genre.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li>
              <div className='dropdown dropdown-hover'>
                <div
                  tabIndex={0}
                  role='div'
                  className='btn m-1 bg-transparent border-none text-2xl'
                >
                  Publishers
                </div>
                <ul
                  tabIndex={0}
                  className='dropdown-content z-50 menu p-2 shadow bg-base-100 rounded-box w-52'
                >
                  {publishers.map((publisher) => (
                    <li key={publisher.id}>
                      <Link to={`/publishers/${publisher.id}`}>
                        {publisher.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
          <GiHamburgerMenu
            onClick={() => setShowMobileNav(!showMobileNav)}
            className='text-white lg:hidden cursor-pointer'
          />
        </div>
      </nav>
      {showMobileNav && (
        <ul className='flex flex-col space-y-2 mt-4'>
          <li>
            <div className='dropdown dropdown-hover'>
              <div
                tabIndex={0}
                role='div'
                className='btn m-1 bg-transparent border-none '
              >
                Genres
              </div>
              <ul
                tabIndex={0}
                className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 z-50'
              >
                {genres.map((genre) => (
                  <li key={genre.id}>
                    <Link to={`/genres/${genre.id}`}>{genre.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          <li>
            <div className='dropdown dropdown-hover'>
              <div
                tabIndex={0}
                role='div'
                className='btn m-1 bg-transparent border-none '
              >
                Publishers
              </div>
              <ul
                tabIndex={0}
                className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 z-50'
              >
                {publishers.map((publisher) => (
                  <li key={publisher.id}>
                    <Link to={`/publishers/${publisher.id}`}>
                      {publisher.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;
