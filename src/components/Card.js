import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVirus } from '@fortawesome/free-solid-svg-icons';

// Components
import CardInner from './CardInner';

const CardStyles = styled.div`
  padding: 0 0.25rem 0.25rem 0.25rem;
  background-color: var(--white);
  border-radius: 5px;
  border: 4px solid
    ${({ deaths }) => {
      if (deaths >= 60) {
        return 'var(--red)';
      } else if (deaths >= 30 && deaths < 60) {
        return 'var(--yellow)';
      } else if (deaths < 30) {
        return 'var(--green)';
      }
    }};

  h2 {
    color: var(--white);
    margin: 0;
  }

  .slide-enter {
    opacity: 0;
  }
  .slide-enter-active {
    opacity: 1;
    transition: opacity 200ms;
  }
  .slide-exit {
    opacity: 1;
  }
  .slide-exit-active {
    opacity: 0;
    transition: opacity 200ms;
  }
`;

const Header = styled.header`
  margin: 0 -0.25rem;
  margin-bottom: 0.5rem;
  padding: 1rem;
  font-size: 1.8rem;
  border-radius: 1px 1px 0 0;
  background-color: ${({ deaths }) => {
    if (deaths >= 60) {
      return 'var(--red)';
    } else if (deaths >= 30 && deaths < 60) {
      return 'var(--yellow)';
    } else if (deaths < 30) {
      return 'var(--green)';
    }
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

export default function DataCard({ hovered, stateData }) {
  const [updated, setUpdated] = useState(null);

  useEffect(() => {
    setDate(stateData.updated);
  });

  function setDate(date) {
    setUpdated(new Date(parseInt(date)).toString());
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
      <CardInner hovered={hovered} stateData={stateData} />
    </CardStyles>
  );
}

DataCard.propTypes = {
  hovered: PropTypes.object,
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
