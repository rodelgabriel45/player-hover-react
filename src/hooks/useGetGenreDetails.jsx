import { useEffect, useState } from 'react';

const BASE_URL = 'https://api.rawg.io/api/genres';

const useGetGenreDetails = (id) => {
  const [loading, setLoading] = useState(false);
  const [genreDetail, setGenreDetail] = useState([]);

  useEffect(() => {
    const fetchGenreDetail = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `${BASE_URL}/${id}?key=${import.meta.env.VITE_RAWG_API_KEY}`
        );
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || data);
        }

        setGenreDetail(data);
      } catch (error) {
        toast.error(error.message || error);
      } finally {
        setLoading(false);
      }
    };

    fetchGenreDetail();
  }, [id]);

  return { loading, genreDetail };
};

export default useGetGenreDetails;
