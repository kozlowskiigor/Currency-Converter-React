import { Form } from "./Form";
import { Section } from "./Section";
import { currencies } from "../Currencies";
import { Clock } from "./Clock";

function App() {

  const calculateResult = ({ inputCurrency, outputCurrency, newValue }) => {

    const inputCurrencyRate = currencies.find(
      ({ short }) => short === inputCurrency).value;
    const outputCurrencyRate = currencies.find(
      ({ short }) => short === outputCurrency).value;

    return (newValue * inputCurrencyRate) / outputCurrencyRate;
  };

  return (
    <>
      <h1
        className="header"
      >
        Kalkulator walut
      </h1>
      <Form
        calculateResult={calculateResult}
        clock={
          <Clock />
        }
      />
      <h2
        className="header secondHeader"
      >
        Pola wymagane do wypełnienia oznaczone są *
      </h2>
      <Section
        title="Uśrednione kursy wymiany z dnia 09.09.2022"
      />
    </>
  );
};

export default App;