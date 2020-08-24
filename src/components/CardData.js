import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const CardDataStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ deaths }) => {
    if (deaths >= 60) return 'var(--red-transparent)';
    if (deaths >= 30) return 'var(--yellow-transparent)';
    return 'var(--green-transparent)';
  }};
  border: 2px solid
    ${({ deaths }) => {
      if (deaths >= 60) return 'var(--red)';
      if (deaths >= 30) return 'var(--yellow)';
      return 'var(--green)';
    }};
  border-radius: 5px;
  padding: 0.25rem;

  p {
    margin-top: 0;
    text-align: center;
  }

  .lable {
    margin-bottom: 0;
  }

  svg {
    grid-row-start: 1;
    grid-row-end: 3;
    padding: 10px;
    font-size: 3rem;
    color: ${({ deaths }) => {
      if (deaths >= 60) return 'var(--red)';
      if (deaths >= 30) return 'var(--yellow)';
      return 'var(--green)';
    }};
  }

  .red {
    color: var(--red);
  }
  .green {
    color: var(--green);
  }
`;

const CardData = ({ children, deaths, icon }) => (
  <CardDataStyles deaths={deaths}>
    <FontAwesomeIcon icon={icon} />
    {children}
  </CardDataStyles>
);

export default CardData;

CardData.propTypes = {
  children: PropTypes.object,
  deaths: PropTypes.number,
  icon: PropTypes.object
};
