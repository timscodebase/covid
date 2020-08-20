import React, { useState } from 'react';

// Components
import Map from './components/Map';
import ReactTooltip from 'react-tooltip';
import styled from 'styled-components';

// Global Styles
import './App.css';

const AppLayout = styled.div`
  display: grid;
  grid-template-columns: 350px auto;
  gap: 1rem;
`;

function App() {
  const [content, setContent] = useState('');
  return (
    <AppLayout>
      <div>
        <h1>Hi</h1>
      </div>
      <div>
        <Map setTooltipContent={setContent} />
        <ReactTooltip>{content}</ReactTooltip>
      </div>
    </AppLayout>
  );
}

export default App;
