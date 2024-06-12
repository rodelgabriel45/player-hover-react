import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import HomePage from './pages/Home';
import GenresPage from './pages/Genres';
import HeaderLayout from './layout/HeaderLayout';
import PublishersPage from './pages/Publishers';
import SearchPage from './pages/Search';
import GameDetailsPage from './pages/GameDetails';
import FooterLayout from './layout/FooterLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HeaderLayout />,
    children: [
      {
        element: <FooterLayout />,
        children: [
          { index: true, element: <HomePage /> },
          { path: '/genres/:genreId', element: <GenresPage /> },
          { path: '/publishers/:publisherId', element: <PublishersPage /> },
          { path: '/search/:searchTerm', element: <SearchPage /> },
          { path: '/games/:gameId', element: <GameDetailsPage /> },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </>
  );
}
export default App;
