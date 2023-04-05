import styled from 'styled-components';

export const H1 = styled.h1`
  color: hsla(0, 0%, 0%, 0.850);
  padding-bottom: 10px;
  font-weight: bold;
  font-size: 20px;
  background: hsla(0, 0%, 70%, 0.950);
  padding: 5px;
  border-radius: 5px;
  border-style: inset inset none none;
  border-top-color: hsl(0, 0%, 70%);
  border-right-color: hsl(0, 0%, 80%);

  max-width: ${({ maxWidth }) => maxWidth || "200px"};
  margin: ${({ margin }) => margin || "0 auto 10px"};
`;