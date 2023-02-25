import "./style.css";
import currencies from "../Currencies";

const Section = ({ title }) => {
  const averageExchangeRates = currencies.map((element, i) => {

    if (element.short === "PLN")
      return "";

    return (
      <p
        key={i}
        className="averageExchangeRates__item"
      >
        1,00 {element.short} = {element.value} PLN
      </p>
    );
  });

  return (
    <>
      <section className="averageExchangeRates">
        <div className="averageExchangeRates--InsideMargin">
          <header className="averageExchangeRates__item">
            {title}
          </header>
          {averageExchangeRates}
        </div>
      </section>
    </>
  );
};

export default Section;