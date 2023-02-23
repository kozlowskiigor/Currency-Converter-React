import "./style.css";

const Section = ({ title }) => {
  const currencies = [
    {
      short: "PLN",
      value: 1,
      name: "Polski złoty",
    },
    {
      short: "GBP",
      value: 5.43913,
      name: "Polski złoty",
    },
    {
      short: "USD",
      value: 4.68485,
      name: "Dolar amerykański",
    },
    {
      short: "CZK",
      value: 0.19224,
      name: "Korona czeska",
    },
    {
      short: "EUR",
      value: 4.71790,
      name: "Euro",
    },
  ];

  const averageExchangeRates = currencies.map((element) => {
    return (
      <section className="averageExchangeRates">
        <div className="averageExchangeRates--InsideMargin">
          <header className="averageExchangeRates__item">
            {title}
          </header>
          <p className="averageExchangeRates__item">
            1,00 {element.short} = {element.value} PLN
          </p>
        </div>
      </section>
    )
  })
  return (
    <div>
      {averageExchangeRates}
    </div>
  )
}

// <section className="averageExchangeRates">
//   <div className="averageExchangeRates--InsideMargin">
//     <header className="averageExchangeRates__item">
//       {title}
//     </header>
//     <p className="averageExchangeRates__item">
//       1,00 EUR = 4,71790 PLN
//     </p>
//     <p className="averageExchangeRates__item">
//       1,00 GBP = 5,43913 PLN
//     </p>
//     <p className="averageExchangeRates__item">
//       1,00 USD = 4,68485 PLN
//     </p>
//     <p className="averageExchangeRates__item">
//       1,00 CZK = 0,19224 PLN
//     </p>
//   </div>
// </section>

export default Section;