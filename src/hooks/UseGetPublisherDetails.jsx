import { useEffect, useState } from 'react';

const BASE_URL = 'https://api.rawg.io/api/publishers';

const useGetPublisherDetails = (id) => {
  const [loading, setLoading] = useState(false);
  const [publisherDetail, setPublisherDetail] = useState([]);

  useEffect(() => {
    const fetchPublisherDetail = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `${BASE_URL}/${id}?key=${import.meta.env.VITE_RAWG_API_KEY}`
        );
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || data);
        }

        setPublisherDetail(data);
      } catch (error) {
        toast.error(error.message || error);
      } finally {
        setLoading(false);
      }
    };

    fetchPublisherDetail();
  }, [id]);

  return { loading, publisherDetail };
};

export default useGetPublisherDetails;
