import React, { useEffect, useState } from 'react';

// Components
import styled from 'styled-components';

const Card = styled.div`
  background-color: ${({ deaths }) => {
    if (deaths >= 60) return 'var(--red)';
    if (deaths >= 30) return 'var(--yellow)';
    return 'var(--green)';
  }};
  padding: 1rem;

  h2 {
    color: var(--white);
  }
`;

const Grid = styled.div`
  width: 350px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 0.5rem;
`;

export default function DataCard({ stateData }) {
  const [updated, setUpdated] = useState(null);

  useEffect(() => {
    setDate(stateData.updated);
  }, []);

  function setDate(date) {
    setUpdated(new Date(parseInt(date)).toString());
  }

  return (
    <Card deaths={stateData.todayDeaths}>
      <h2>{stateData.state}</h2>
      <Grid>
        <p>Active: {stateData.active}</p>
        <p>Cases: {stateData.cases}</p>
        <p>Deaths: {stateData.deaths}</p>
        <p>Population: {stateData.population}</p>
        <p>Recovered: {stateData.recovered}</p>
        <p>New Cases Today: {stateData.todayCases}</p>
        <p>New Deaths Today: {stateData.todayDeaths}</p>
        <p>Last Updated: {updated}</p>
      </Grid>
    </Card>
  );
}
