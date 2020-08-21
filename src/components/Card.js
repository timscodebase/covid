import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import CardData from './CardData';

const CardStyles = styled.div`
  padding: 1rem;
  background-color: var(--white);
  border-radius: 10px 10px 20px 20px;
  border: 4px solid
    ${({ deaths }) => {
      if (deaths >= 60) return 'var(--red)';
      if (deaths >= 30) return 'var(--yellow)';
      return 'var(--green)';
    }};

  h2 {
    color: var(--white);
  }
`;

const Header = styled.header`
  margin: -1rem;
  margin-bottom: 2rem;
  padding: 1rem;
  font-size: 2rem;
  background-color: ${({ deaths }) => {
    if (deaths >= 60) return 'var(--red)';
    if (deaths >= 30) return 'var(--yellow)';
    return 'var(--green)';
  }};
  color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    padding-left: 10px;
    font-size: 0.8rem;
    color: var(--white-75);
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 0.75rem;

  .lable {
    font-weight: bold;
    text-decoration: underline;
    margin-bottom: 5px;
  }
`;

export default function DataCard({ stateData }) {
  const [updated, setUpdated] = useState(null);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    setDate(stateData.updated);
  });

  function setDate(date) {
    setUpdated(new Date(parseInt(date)).toString());
    calPercent();
  }

  function calPercent() {
    const percent = stateData.deaths / stateData.population;
    console.log(percent < 0.0001);
    if (percent < 1) setPercent(0);
    setPercent(percent);
  }

  return (
    <CardStyles deaths={stateData.todayDeaths}>
      <Header deaths={stateData.todayDeaths}>
        {stateData.state}
        <p>{updated}</p>
      </Header>
      <Grid>
        <CardData>
          <p className="lable">Recovered:</p>
          <p>{stateData.recovered.toLocaleString()}</p>
        </CardData>
        <CardData>
          <p className="lable">New Deaths Today:</p>
          <p>{stateData.todayDeaths.toLocaleString()}</p>
        </CardData>
        <CardData>
          <p className="lable">Active Cases:</p>
          <p>{stateData.active.toLocaleString()}</p>
        </CardData>
        <CardData>
          <p className="lable">Total Cases:</p>
          <p>{stateData.cases.toLocaleString()}</p>
        </CardData>
        <CardData>
          <p className="lable">Total Deaths:</p>
          <p>{stateData.deaths.toLocaleString()}</p>
        </CardData>
        <CardData>
          <p className="lable">Pecentage of Total Deaths over Population:</p>
          <p>{percent}%</p>
        </CardData>
      </Grid>
    </CardStyles>
  );
}

DataCard.propTypes = {
  stateData: PropTypes.shape({
    active: PropTypes.number,
    cases: PropTypes.number,
    deaths: PropTypes.number,
    population: PropTypes.number,
    recovered: PropTypes.number,
    state: PropTypes.string,
    todayDeaths: PropTypes.number,
    updated: PropTypes.number
  })
};
