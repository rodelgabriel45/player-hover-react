import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const BASE_URL = 'https://api.rawg.io/api/publishers';

const useGetPublishers = () => {
  const [loading, setLoading] = useState(false);
  const [publishers, setPublishers] = useState([]);

  useEffect(() => {
    const fetchPublishers = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `${BASE_URL}?key=${import.meta.env.VITE_RAWG_API_KEY}`
        );
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || data);
        }

        setPublishers(data.results);
      } catch (error) {
        toast.error(error.message || error);
      } finally {
        setLoading(false);
      }
    };

    fetchPublishers();
  }, []);

  return { loading, publishers };
};

export default useGetPublishers;
