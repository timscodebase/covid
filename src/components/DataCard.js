import React from "react";

// Components
import styled from "styled-components";

const Card = styled.div`
  background-color: ${({ deaths }) => {
    if (deaths >= 60) return "var(--red)";
    if (deaths >= 30) return "var(--yellow)";
    return "var(--green)";
  }};
  padding: 1rem;

  h2 {
    color: var(--white);
  }
`;

export default function DataCard({ stateData }) {
  return (
    <Card deaths={stateData.todayDeaths}>
      <h2>{stateData.state}</h2>
      <p>active: {stateData.active}</p>
      <p>cases: {stateData.cases}</p>
      <p>casesPerOneMillion: {stateData.casesPerOneMillion}</p>
      <p>deaths: {stateData.deaths}</p>
      <p>deathsPerOneMillion: {stateData.deathsPerOneMillion}</p>
      <p>population: {stateData.population}</p>
      <p>recovered: {stateData.recovered}</p>
      <p>tests: {stateData.tests}</p>
      <p>testsPerOneMillion: {stateData.testsPerOneMillion}</p>
      <p>todayCases: {stateData.todayCases}</p>
      <p>todayDeaths: {stateData.todayDeaths}</p>
      <p>updated: {stateData.updated}</p>
    </Card>
  );
}
