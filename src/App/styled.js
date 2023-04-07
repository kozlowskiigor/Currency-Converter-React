import styled from 'styled-components';

export const H1 = styled.h1`
  color: ${({ theme }) => theme.color.transparencyBlack};
  padding-bottom: 10px;
  font-weight: bold;
  font-size: 20px;
  background: ${({ theme }) => theme.color.transparencyGray};
  padding: 5px;
  border-radius: 5px;
  border-style: inset inset none none;
  border-top-color: ${({ theme }) => theme.color.gray};
  border-right-color: ${({ theme }) => theme.color.lightGray};

  max-width: ${({ maxWidth }) => maxWidth || "200px"};
  margin: ${({ margin }) => margin || "0 auto 10px"};
`;