import React from 'react';
import Form from "./Form";
import Header from './Header';
import SecondHeader from "./SecondHeader";
import Section from "./Section";

function App() {
  return (
    <>
      <Header
        title="Kalkulator walut"
      />
      <Form />
      <SecondHeader
        title="Pola wymagane do wypełnienia oznaczone są *"
      />
      <Section
        title="Uśrednione kursy wymiany z dnia 09.09.2022 13:00"
      />
    </>
  );
}

export default App;