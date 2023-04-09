import { useState, useRef } from "react";
import { currencies } from "../Currencies";
import {
  CurrenciesForm,
  Fieldset,
  Legend,
  FormLine,
  LabelText,
  Input,
  Button,
  Result,
  Strong,
  RequiredFields,
} from "./styled";

export const Form = ({ calculateResult, clock }) => {

  const [result, setResult] = useState({ inputCurrency: "PLN", outputCurrency: "PLN", newValue: 0 });
  const [newValue, setNewValue] = useState("");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [inputCurrency, setInputCurrency] = useState("PLN");
  const [outputCurrency, setOutputCurrency] = useState("PLN");

  const inputRef = useRef(null)

  const selectOptions = currencies.map(({ short, name }) => (
    <option
      key={short}
      value={short}
    >
      {short} - {name}
    </option>
  ));

  const onInputChange = ({ target }) => setNewValue(target.value)
  const onInputSeclectChange = ({ target }) => setInputCurrency(target.value)
  const onOutputSeclectChange = ({ target }) => setOutputCurrency(target.value)

  const onFormSubmit = (event) => {
    event.preventDefault();

    setNewValue("");

    inputRef.current.focus();

    setResult({
      inputCurrency,
      outputCurrency,
      newValue,
    });

    const result = {
      inputCurrency,
      outputCurrency,
      newValue,
    };

    const amount = calculateResult(result);
    setConvertedAmount(amount)
  };

  const ResultLine = ({ result, convertedAmount }) => (
    <FormLine margin="10px 0">
      {result.length !== undefined && (
        <Strong>
          {result.newValue}&nbsp;{result.inputCurrency} = {convertedAmount.toFixed(2)}&nbsp;{result.outputCurrency}
        </Strong>
      )}
    </FormLine>
  );

  return (
    <CurrenciesForm
      onSubmit={onFormSubmit}
    >
      <Fieldset>
        <Legend>
          Kalkulator walut
        </Legend>
        {clock}
        <FormLine>
          <label>
            <LabelText>
              Kwota*
            </LabelText>
            <Input
              required
              min="1"
              step="any"
              type="number"
              placeholder="Wpisz kwotę"
              value={newValue}
              ref={inputRef}
              onChange={onInputChange}
            />
          </label>
        </FormLine>
        <FormLine>
          <label>
            <LabelText>
              Przewalutowanie z
            </LabelText>
            <Input
              as="select"
              value={inputCurrency}
              onChange={onInputSeclectChange}
            >
              {selectOptions}
            </Input>
          </label>
        </FormLine>
        <FormLine>
          <label>
            <LabelText>
              Przewalutowanie na
            </LabelText>
            <Input
              as="select"
              value={outputCurrency}
              onChange={onOutputSeclectChange}
            >
              {selectOptions}
            </Input>
          </label>
        </FormLine>
        <Button>
          Przewalutuj
        </Button>
        <Result>
          <ResultLine
            result={result}
            convertedAmount={convertedAmount}
          />
          <RequiredFields>
            Pola wymagane do wypełnienia oznaczone są *
          </RequiredFields>
        </Result>
      </Fieldset>
    </CurrenciesForm>
  );
};