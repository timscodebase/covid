import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import {
  faSmileBeam,
  faSkullCrossbones,
  faPrescriptionBottleAlt,
  faUserMd
} from '@fortawesome/free-solid-svg-icons';

// Components
import CardData from './CardData';

// Styles
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

export default function CardInner({ hovered, stateData }) {
  return (
    <AnimatePresence>
      <motion.section
        key={hovered}
        animate={{ opacity: 1 }}
        in={{ opacity: 0 }}
        out={{ opacity: 0 }}
      >
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
          <CardData
            deaths={stateData.todayDeaths}
            icon={faPrescriptionBottleAlt}
          >
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
              <p className="lable">
                Pecentage of Total Deaths over Population:
              </p>
              <p>
                {stateData.todayDeaths}/{stateData.population}
              </p>
            </>
          </CardData>
        </Grid>
      </motion.section>
    </AnimatePresence>
  );
}

CardInner.propTypes = {
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
