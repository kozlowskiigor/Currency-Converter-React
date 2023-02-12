import React from 'react';
import Form from "./Form";
import Header from './Header';
import Section from "./Section";

function App() {
  return (
    <>
      <Header
        title="Kalkulator walut"
      />
      <Form />
      <Section
        title="Uśrednione kursy wymiany z dnia 09.09.2022"
      />
    </>
  );
}

export default App;