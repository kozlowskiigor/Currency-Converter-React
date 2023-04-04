import styled from 'styled-components';

export const ExchangeSection = styled.section`
  background: hsla(0, 0%, 90%, 0.925);
  max-width: 600px;
  color: hsla(0, 0%, 0%, 0.850);
  padding: 1px;
  margin: ${({ margin }) => margin || "10px auto"};
  border: ${({ border }) => border || ""};
  border-radius: 5px;
`;

export const Currencies = styled.p`
  margin: 10px 0;
`;