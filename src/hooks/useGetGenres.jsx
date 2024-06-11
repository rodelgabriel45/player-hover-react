import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const BASE_URL = 'https://api.rawg.io/api/genres';

const useGetGenres = () => {
  const [loading, setLoading] = useState(false);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `${BASE_URL}?key=${import.meta.env.VITE_RAWG_API_KEY}`
        );
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || data);
        }

        setGenres(data.results);
      } catch (error) {
        toast.error(error.message || error);
      } finally {
        setLoading(false);
      }
    };

    fetchGenres();
  }, []);

  return { loading, genres };
};

export default useGetGenres;
