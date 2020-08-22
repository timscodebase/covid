import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import {
  faVirus,
  faPrescriptionBottleAlt,
  faSkullCrossbones,
  faUserMd
} from '@fortawesome/free-solid-svg-icons';
import { faSmileBeam } from '@fortawesome/free-regular-svg-icons';

// Components
import CardData from './CardData';

const CardStyles = styled.div`
  padding: 0 0.25rem 0.25rem 0.25rem;
  background-color: var(--white);
  border-radius: 5px;
  border: 4px solid
    ${({ deaths }) => {
      if (deaths >= 60) return 'var(--red)';
      if (deaths >= 30) return 'var(--yellow)';
      return 'var(--green)';
    }};

  h2 {
    color: var(--white);
    margin: 0;
  }
`;

const Header = styled.header`
  margin: 0 -0.25rem;
  margin-bottom: 0.5rem;
  padding: 1rem;
  font-size: 1.8rem;
  border-radius: 1px 1px 0 0;
  background-color: ${({ deaths }) => {
    if (deaths >= 60) return 'var(--red)';
    if (deaths >= 30) return 'var(--yellow)';
    return 'var(--green)';
  }};
  color: var(--white);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  .header {
    margin-left: 1rem;
  }

  p {
    margin: 0;
    padding-left: 10px;
    font-size: 0.8rem;
    color: var(--white);
    font-weight: bold;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.25rem;

  .lable {
    font-weight: bold;
    text-decoration: underline;
    margin-bottom: 5px;
  }
`;

export default function DataCard({ stateData }) {
  const [updated, setUpdated] = useState(null);

  useEffect(() => {
    setDate(stateData.updated);
  });

  function setDate(date) {
    setUpdated(new Date(parseInt(date)).toString());
    calPercent();
  }

  function calPercent() {
    const percent = stateData.deaths / stateData.population;
    if (percent < 1) setPercent(0);
    setPercent(percent);
  }

  return (
    <CardStyles deaths={stateData.todayDeaths}>
      <Header deaths={stateData.todayDeaths}>
        <h2>
          <FontAwesomeIcon icon={faVirus} />
          <span className="header">{stateData.state}</span>
        </h2>
        <p>{updated}</p>
      </Header>
      <Grid>
        <CardData deaths={stateData.todayDeaths} icon={faSmileBeam}>
          <>
            <p className="lable">Recovered:</p>
            <p>{stateData.recovered.toLocaleString()}</p>
          </>
        </CardData>
        <CardData deaths={stateData.todayDeaths} icon={faSkullCrossbones}>
          <>
            <p className="lable">New Deaths Today:</p>
            <p>{stateData.todayDeaths.toLocaleString()}</p>
          </>
        </CardData>
        <CardData deaths={stateData.todayDeaths} icon={faPrescriptionBottleAlt}>
          <>
            <p className="lable">Active Cases:</p>
            <p>{stateData.active.toLocaleString()}</p>
          </>
        </CardData>
        <CardData deaths={stateData.todayDeaths} icon={faUserMd}>
          <>
            <p className="lable">Total Cases:</p>
            <p>{stateData.cases.toLocaleString()}</p>
          </>
        </CardData>
        <CardData deaths={stateData.todayDeaths} icon={faSkullCrossbones}>
          <>
            <p className="lable">Total Deaths:</p>
            <p>{stateData.deaths.toLocaleString()}</p>
          </>
        </CardData>
        <CardData deaths={stateData.todayDeaths} icon={faSmileBeam}>
          <>
            <p className="lable">Pecentage of Total Deaths over Population:</p>
            <p>
              {stateData.todayDeaths}/{stateData.population}
            </p>
          </>
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
