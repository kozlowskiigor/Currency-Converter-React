import React from 'react';
import Form from "./Form";
import Section from "./Section";

function App() {
  return (
    <>
      <h1 className="header">
        Kalkulator walut
      </h1>
      <Form />
      <h2 className="header secondHeader">
        Pola wymagane do wypełnienia oznaczone są *
      </h2>
      <Section
        title="Uśrednione kursy wymiany z dnia 09.09.2022"
      />
    </>
  );
}

export default App;