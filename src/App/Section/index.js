import { currencies } from "../../Currencies";
import { Currencies, ExchangeSection, Div, Header } from "./styled";

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
        <Div>
          <Header>
            {title}
          </Header>
          {averageExchangeRates}
        </Div>
      </ExchangeSection>
    </>
  );
};