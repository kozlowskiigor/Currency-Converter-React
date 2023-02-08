import "./style.css";

const Form = () => (
  <form className="form">
    <fieldset className="form__fieldset">
      <legend className="form__legend">Kalkulator walut</legend>
      <p className="form__line">
        <label>
          <span className="form__labelText">Kwota*</span>
          <input type="number" min="1" step="any" placeholder="Wpisz kwotę" required className="form__field" />
        </label>
      </p>
      <p className="form__line">
        <label>
          <span className="form__labelText">Przewalutowanie z</span>
          <select className="form__field">
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
          <select className="form__field">
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
          Przewalutowana kwota<strong className="resault__value"></strong>
        </p>
      </span>
    </fieldset>
  </form>
);

export default Form;