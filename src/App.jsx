import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/Home';
import GenresPage from './pages/Genres';
import HeaderLayout from './layout/HeaderLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HeaderLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/genres', element: <GenresPage /> },
      { path: '/developers', element: <HomePage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
export default App;
