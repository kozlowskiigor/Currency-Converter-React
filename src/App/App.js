import { Form } from "./Form";
import { Section } from "./Section";
import { currencies } from "./Currencies";
import { Clock } from "./Clock";
import { H1 } from "./styled";

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
      <H1>
        Kalkulator walut
      </H1>
      <Form
        calculateResult={calculateResult}
        clock={
          <Clock />
        }
      />
      <H1
        as="h2"
        maxWidth="465px"
      >
        Pola wymagane do wypełnienia oznaczone są *
      </H1>
      <Section
        title="Uśrednione kursy wymiany z dnia 09.09.2022"
      />
    </>
  );
};

export default App;