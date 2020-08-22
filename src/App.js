import React, { useState } from 'react';

// Components
import Map from './components/Map';
import ReactTooltip from 'react-tooltip';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

// Global Styles
import './App.css';

const AppLayout = styled.div`
  display: grid;
  gap: 1rem;
  padding: 1rem;
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
  background-color: #efe;
  color: #333;
  font-size: 3.5rem;
  transform: rotate(-45deg);

  position: absolute;
  top: -5rem;
  right: -2rem;
  width: 100px;
  padding: 4rem 1.5rem;
  height: 200px;

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
        <Corner href="" target="_blank" rel="noopener noreferer">
          <FontAwesomeIcon icon={faGithub} />
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
