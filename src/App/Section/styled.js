import styled from 'styled-components';

export const ExchangeSection = styled.section`
  background: ${({ theme }) => theme.color.transparencyLightGray};
  max-width: 600px;
  color: ${({ theme }) => theme.color.transparencyBlack};
  padding: 1px;
  margin: ${({ margin }) => margin || "10px auto"};
  border: ${({ border }) => border || ""};
  border-radius: 5px;
`;

export const Currencies = styled.p`
  margin: 10px 0;
`;