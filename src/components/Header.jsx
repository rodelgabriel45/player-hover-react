import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineSearch } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='bg-[#0F0F1B] p-4 shadow-md'>
      <nav className='flex justify-between items-center max-w-5xl mx-auto'>
        <h1>Logo</h1>
        <form>
          <div className='relative flex justify-end text-black'>
            <input
              type='text'
              className='bg-[#fff] px-3 p-1 rounded-md max-w-[100rem] text-xs lg:text-lg'
              placeholder='Search Games...'
            />
            <button className='text-xl lg:text-2xl absolute inset-y-0 mr-2'>
              <MdOutlineSearch />
            </button>
          </div>
        </form>

        <div>
          <ul className='hidden lg:flex gap-2 items-center'>
            <li>
              <details className='dropdown dropdown-hover'>
                <summary className='m-1 btn'>Genres</summary>
                <ul className='p-2 shadow menu dropdown-content  z-[1] bg-base-100 rounded-box w-52'>
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link>Developers</Link>
            </li>
          </ul>
          <GiHamburgerMenu className='text-white lg:hidden' />
        </div>
      </nav>
    </header>
  );
};

export default Header;
