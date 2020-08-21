import React, { useState } from 'react';

// Components
import Map from './components/Map';
import ReactTooltip from 'react-tooltip';
import styled from 'styled-components';

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
`;

function App() {
  const [content, setContent] = useState('');
  return (
    <AppLayout>
      <Header>
        <h1>United States COVID-19 Data</h1>
      </Header>
      <>
        <Map setTooltipContent={setContent} />
        <ReactTooltip>{content}</ReactTooltip>
      </>
    </AppLayout>
  );
}

export default App;
