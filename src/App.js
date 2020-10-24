import React, { useState } from 'react';

// Components
import Map from './components/Map';
import ReactTooltip from 'react-tooltip';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const AppLayout = styled.div`
  display: grid;
  gap: 1rem;
  padding: 1rem;
  overflow: hidden;
`;

const Header = styled.header`
  color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Corner = styled.a`
  text-decoration: none;
  display: block;
  text-align: center;
  background-color: var(--white-75);
  color: #333;
  font-size: 3.5rem;
  transform: rotate(-45deg);

  position: absolute;
  top: -5rem;
  right: -2rem;
  width: 100px;
  padding: 4rem 1.5rem;
  height: 200px;

  &:hover {
    color: #000;
    background-color: var(--dark-green);
  }

  p {
    width: 200px;
    position: absolute;
    font-size: 1rem;
    transform: rotate(90deg);
    top: 75px;
    right: -15px;
  }

  svg {
    transform: rotate(45deg);
  }
`;

function App() {
  const [content, setContent] = useState('');
  return (
    <AppLayout>
      <Header>
        <h1>United States COVID-19 Data</h1>
        <Corner
          href="https://github.com/timscodebase/covid"
          target="_blank"
          rel="noopener noreferer"
        >
          <FontAwesomeIcon icon={faGithub} />
          <p>Fork me on Github</p>
        </Corner>
      </Header>
      <>
        <Map setTooltipContent={setContent} />
        <ReactTooltip>{content}</ReactTooltip>
      </>
    </AppLayout>
  );
}

export default App;
