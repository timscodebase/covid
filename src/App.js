import React from "react";

// Components
import DataCard from "./components/DataCard";
import Map from "./components/Map";
import ReactTooltip from "react-tooltip";
import styled from "styled-components";

// Hooks
import useFetch from "./hooks/useFetch";

// Global Styles
import "./App.css";

const Cards = styled.div`
  display: grid;
  gap: 1rem;
  padding: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

function App() {
  const { status, data } = useFetch("https://disease.sh/v3/covid-19/states");
  const [content, setContent] = useState("");
  console.log(data);

  //TODO (status === "fetched") return <p>Loading...</p>;
  const cards = data.map((state) => (
    <DataCard key={state.state} stateData={state} />
  ));

  return (
    <>
      <Map setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </>
  );
  // return <Cards>{cards}</Cards>;
}

export default App;
