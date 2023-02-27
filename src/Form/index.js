import React, { useState } from "react";
import "./style.css";

const Form = ({ calculateResult }) => {

  const [result, setResult] = useState(0);
  const [newValue, setNewValue] = useState("");
  const [inputCurrency, setInputCurrency] = useState("PLN");
  const [outputCurrency, setOutputCurrency] = useState("PLN");


  const onInputChange = ({ target }) => setNewValue(target.value)
  const onInputSeclectChange = ({ target }) => setInputCurrency(target.value)
  const onOutputSeclectChange = ({ target }) => setOutputCurrency(target.value)

  const onFormSubmit = (event) => {

    event.preventDefault();

    setNewValue("");

    setResult(calculateResult(inputCurrency, outputCurrency, newValue));
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
              <option value="PLN">PLN - polski złoty</option>
              <option value="GBP">GBP - brytyjski funt szterling</option>
              <option value="USD">USD - dolar amerykański</option>
              <option value="CZK">CZK - korona czeska</option>
              <option value="EUR">EUR - euro</option>
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
              <option value="PLN">PLN - polski złoty</option>
              <option value="GBP">GBP - brytyjski funt szterling</option>
              <option value="USD">USD - dolar amerykański</option>
              <option value="CZK">CZK - korona czeska</option>
              <option value="EUR">EUR - euro</option>
            </select>
          </label>
        </p>
        <button className="form__button">Przewalutuj</button>
        <span className="form__labelText form__resault">
          <p className="convertedAmount">
            Przewalutowana kwota
            <strong className="resault__value">
              {result.toFixed(2)} {outputCurrency}
            </strong>
          </p>
        </span>
      </fieldset>
    </form>
  );
};

export default Form;