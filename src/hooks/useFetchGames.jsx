import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const BASE_URL = 'https://api.rawg.io/api/games';

const useFetchGames = (page, genre, publisher) => {
  const [loading, setLoading] = useState(false);
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `${BASE_URL}?key=${
            import.meta.env.VITE_RAWG_API_KEY
          }&page=${page}&page_size=13${genre ? `&genres=${genre}` : ''}${
            publisher ? `&publishers=${publisher}` : ''
          }`
        );
        const data = await res.json();

        if (!res.ok) {
          console.log(data.message || data);
        }

        setGames(data.results);
      } catch (error) {
        toast.error(error.message || error);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, [page, genre, publisher]);

  return { loading, games };
};

export default useFetchGames;
