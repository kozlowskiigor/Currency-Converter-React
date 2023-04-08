import styled from 'styled-components';

export const ExchangeSection = styled.section`
  color: ${({ theme }) => theme.color.transparencyBlack};
  margin: 10px 15px;
  border-radius: 5px;
`;

export const Div = styled.div`
  background: #e6e6e6d9;
  max-width: 600px;
  margin: 0 auto;
  border: 3px ridge;
  border-radius: 5px;
`;

export const Header = styled.header`
  margin: 10px;
`;

export const Currencies = styled.p`
  margin: 10px 0;
`;

// export const ExchangeSection = styled.section`
//   background: ${({ background }) => background || ""};
//   max-width: ${({ maxWidth }) => maxWidth || ""};
//   color: ${({ theme }) => theme.color.transparencyBlack};
//   margin: ${({ margin }) => margin || "10px 15px"};
//   border: ${({ border }) => border || ""};
//   border-radius: 5px;
// `;