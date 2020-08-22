import { useState, useEffect } from 'react';

export default function useStatesFetch(url) {
  const [statesLoading, setStatesLoading] = useState(true);
  const [states, setStates] = useState([]);

  useEffect(() => {
    if (!url) return;
    const fetchData = async () => {
      setStatesLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setStates(data);
      setStatesLoading(false);
    };

    fetchData();
  }, [url]);

  return [states, statesLoading];
}
