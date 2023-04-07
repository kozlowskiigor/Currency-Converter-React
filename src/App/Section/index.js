import { currencies } from "../../Currencies";
import { ExchangeSection, Currencies } from "./styled";

export const Section = ({ title }) => {

  const averageExchangeRates = currencies.map((element, i) => {

    if (element.short === "PLN")
      return "";

    return (
      <Currencies
        key={i}
      >
        1,00 {element.short} = {element.value} PLN
      </Currencies>
    );
  });

  return (
    <>
      <ExchangeSection>
        <ExchangeSection
          as="div"
          margin="margin: 0 15px"
          border="3px ridge"
          background="#e6e6e6bf"
        >
          <ExchangeSection
            as="header"
            margin="margin: 10px 0"
          >
            {title}
          </ExchangeSection>
          {averageExchangeRates}
        </ExchangeSection>
      </ExchangeSection>
    </>
  );
};