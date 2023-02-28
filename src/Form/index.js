import React, { useState } from "react";
import { currencies } from "../Currencies";
import "./style.css";

const Form = ({ calculateResult }) => {

  const [result, setResult] = useState({ inputCurrency: "PLN", outputCurrency: "PLN", newValue: 0 });
  const [newValue, setNewValue] = useState("");
  const [inputCurrency, setInputCurrency] = useState("PLN");
  const [outputCurrency, setOutputCurrency] = useState("PLN");

  const convertedAmount = calculateResult(result);

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

    setResult({
      inputCurrency,
      outputCurrency,
      newValue,
    });
  };

  return (
    <form
      className="form"
      onSubmit={onFormSubmit}
    >
      <fieldset className="form__fieldset">
        <legend className="form__legend">Kalkulator walut</legend>
        <p className="form__line">
          <label>
            <span className="form__labelText">Kwota*</span>
            <input
              required
              min="1"
              step="any"
              type="number"
              className="form__field"
              placeholder="Wpisz kwotę"
              value={newValue}
              onChange={onInputChange}
            />
          </label>
        </p>
        <p className="form__line">
          <label>
            <span className="form__labelText">Przewalutowanie z</span>
            <select
              className="form__field"
              value={inputCurrency}
              onChange={onInputSeclectChange}
            >
              {selectOptions}
            </select>
          </label>
        </p>
        <p className="form__line">
          <label>
            <span className="form__labelText">Przewalutowanie na</span>
            <select
              className="form__field"
              value={outputCurrency}
              onChange={onOutputSeclectChange}
            >
              {selectOptions}
            </select>
          </label>
        </p>
        <button className="form__button">Przewalutuj</button>
        <span className="form__labelText form__resault">
          <p className="convertedAmount">
            Przewalutowana kwota
            <strong className="resault__value">
              {convertedAmount.toFixed(2)} {result.outputCurrency}
            </strong>
          </p>
        </span>
      </fieldset>
    </form>
  );
};

export default Form;