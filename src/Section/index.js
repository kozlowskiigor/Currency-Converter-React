import "./style.css";
import currencies from "../Currencies";

const Section = ({ title }) => {

  const averageExchangeRates = currencies.map((element) => {
    if (element.short !== "PLN")
    return (
      <p className="averageExchangeRates__item">
        1,00 {element.short} = {element.value} PLN
      </p>
    )
  })
  return (
    <>
      <section className="averageExchangeRates">
        <div className="averageExchangeRates--InsideMargin">
          <header className="averageExchangeRates__item">
            {title}
          </header>
          <p className="averageExchangeRates__item">
            {averageExchangeRates}
          </p>
        </div>
      </section>
    </>
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