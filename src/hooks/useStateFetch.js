import { useState, useEffect } from 'react';

export default function useStateFetch(currentState) {
  const [stateLoading, setStateLoading] = useState(true);
  const [state, setState] = useState({});

  useEffect(() => {
    if (!currentState) return;
    const fetchData = async () => {
      setStateLoading(true);
      const response = await fetch(
        `https://disease.sh/v3/covid-19/states/${currentState}`
      );
      const data = await response.json();
      console.log(`data: ${data}`);
      setState(data);
      setStateLoading(false);
    };

    fetchData();
  }, [state]);

  return [state, stateLoading, setState];
}
