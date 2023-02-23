import React from 'react';
import Form from "./Form";
import Section from "./Section";

function App() {

  const pln = {
    short: "PLN",
    value: 1,
    name: "Polski złoty",
  };
  const gbp = {
    short: "GBP",
    value: 5.43913,
    name: "Polski złoty",
  };
  const usd = {
    short: "USD",
    value: 4.68485,
    name: "Dolar amerykański",
  };
  const czk = {
    short: "CZK",
    value: 0.19224,
    name: "Korona czeska",
  };
  const eur = {
    short: "EUR",
    value: 4.71790,
    name: "Euro",
  };

  const calculateResult = (inputCurrency, outputCurrency, newValue) => {
    switch (inputCurrency) {
      case pln.short:
      default:
        switch (outputCurrency) {
          case pln.short: return +newValue;
          case eur.short: return newValue / eur.value;
          case czk.short: return newValue / czk.value;
          case usd.short: return newValue / usd.value;
          case gbp.short: return newValue / gbp.value;
          default:
        }
        break;
      case gbp.short:
        switch (outputCurrency) {
          case gbp.short: return +newValue;
          case pln.short: return newValue * gbp.value;
          case eur.short: return newValue * gbp.value / eur.value;
          case czk.short: return newValue * gbp.value / czk.value;
          case usd.short: return newValue * gbp.value / usd.value;
          default:
        }
        break;
      case usd.short:
        switch (outputCurrency) {
          case usd.short: return +newValue;
          case pln.short: return newValue * usd.value;
          case eur.short: return newValue * usd.value / eur.value;
          case czk.short: return newValue * usd.value / czk.value;
          case gbp.short: return newValue * usd.value / gbp.value;
          default:
        }
        break;
      case czk.short:
        switch (outputCurrency) {
          case czk.short: return +newValue;
          case pln.short: return newValue * czk.value;
          case eur.short: return newValue * czk.value / eur.value;
          case gbp.short: return newValue * czk.value / gbp.value;
          case usd.short: return newValue * czk.value / usd.value;
          default:
        }
        break;
      case eur.short:
        switch (outputCurrency) {
          case eur.short: return +newValue;
          case pln.short: return newValue * eur.value;
          case czk.short: return newValue * eur.value / czk.value;
          case gbp.short: return newValue * eur.value / gbp.value;
          case usd.short: return newValue * eur.value / usd.value;
          default:
        }
        break;
    };
  };

  return (
    <>
      <h1 className="header">
        Kalkulator walut
      </h1>
      <Form 
      calculateResult={calculateResult}
      />
      <h2 className="header secondHeader">
        Pola wymagane do wypełnienia oznaczone są *
      </h2>
      <Section
        title="Uśrednione kursy wymiany z dnia 09.09.2022"
      />
    </>
  );
};

export default App;