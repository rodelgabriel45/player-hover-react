import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const BASE_URL = 'https://api.rawg.io/api/games';

const useGetGameDetails = (id) => {
  const [loading, setLoading] = useState(false);
  const [gameDetails, setGameDetails] = useState({});

  useEffect(() => {
    const getGameDetails = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `${BASE_URL}/${id}?key=${import.meta.env.VITE_RAWG_API_KEY}`
        );
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || data);
        }

        setGameDetails(data);
      } catch (error) {
        toast.error(error.message || error);
      } finally {
        setLoading(false);
      }
    };

    getGameDetails();
  }, [id]);

  return { loading, gameDetails };
};

export default useGetGameDetails;
