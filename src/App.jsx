import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import HomePage from './pages/Home';
import GenresPage from './pages/Genres';
import HeaderLayout from './layout/HeaderLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HeaderLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/genres/:genreId', element: <GenresPage /> },
      { path: '/developers', element: <HomePage /> },
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
