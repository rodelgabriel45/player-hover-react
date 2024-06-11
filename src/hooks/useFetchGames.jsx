import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const BASE_URL = 'https://api.rawg.io/api/games';

const useFetchGames = () => {
  const [loading, setLoading] = useState(false);
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `${BASE_URL}?key=${import.meta.env.VITE_RAWG_API_KEY}`
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
  }, []);

  return { loading, games };
};

export default useFetchGames;
