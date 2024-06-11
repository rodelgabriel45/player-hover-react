import { useEffect, useState } from 'react';

const BASE_URL = 'https://api.rawg.io/api/games';

const useFetchGames = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchGames = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `${BASE_URL}?key=${import.meta.env.VITE_RAWG_API_KEY}`
        );
        const data = await res.json();

        if (!res.ok) {
          console.log(data);
        }

        console.log(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  return { loading };
};

export default useFetchGames;
