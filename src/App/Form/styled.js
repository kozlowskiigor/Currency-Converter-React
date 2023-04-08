import styled from 'styled-components';

export const CurrenciesForm = styled.form`
  margin: 0 15px;
  text-align: left;
  overflow-x: auto;
`;

export const Fieldset = styled.fieldset`
  max-width: 600px;
  margin: 0 auto;
  border: 3px ridge;
  border-radius: 5px;
  background: ${({ theme }) => theme.color.transparencyLightGray};
  padding: 0 5px;
`;

export const Legend = styled.legend`
  background: ${({ theme }) => theme.color.teal};
  border-radius: 10px;
  padding: 5px 10px;
  text-align: left;
  color: ${({ theme }) => theme.color.beige};
  border-width: 1px;
  border-style: inset inset none none;
  border-top-color: ${({ theme }) => theme.color.gray};
  border-right-color: ${({ theme }) => theme.color.lightGray};
`;

export const FormLine = styled.p`
  margin: ${({ margin }) => margin || "10px"};
`;

export const RequiredFields = styled.p`
  font-family: monospace;
  color: ${({ theme }) => theme.color.boulder};
  font-size: 12px;
  margin: 20px auto 10px;
`;

export const LabelText = styled.span`
  width: 180px;
  display: inline-block;
  margin: 0 15px;
`;

export const Input = styled.input`
  border-radius: 5px;
  margin: 0 10px;
  padding: 5px;
  max-width: 225px;
  max-height: 29px;
  border-width: 2px;
  border-style: inset inset none none;
  border-top-color: ${({ theme }) => theme.color.gray};
  border-right-color: ${({ theme }) => theme.color.lightGray};
  transition: background 0.5s;

  &:required {
    background: ${({ theme }) => theme.color.alto};
  };

  &:hover {
    background: ${({ theme }) => theme.color.mercury};
  };

  &:active {
    background: ${({ theme }) => theme.color.silver};
  };
`;

export const Button = styled.button`
  margin: 5px auto;
  width: 100%;
  padding: 3px 0;
  background: ${({ theme }) => theme.color.teal};
  color: ${({ theme }) => theme.color.beige};
  border-radius: 5px;
  border: none;
  border-width: 2px;
  border-style: inset inset none none;
  border-top-color: ${({ theme }) => theme.color.gray};
  border-right-color: ${({ theme }) => theme.color.lightGray};
  transition: transform 1s, filter 0.3s;

  &:hover {
    filter: brightness(110%);
    transform: scale(1.02);
  };

  &:active {
    filter: brightness(90%);
  };
`;

export const Result = styled.span`
  display: inline-block;
  margin-left: 20px;
  max-width: 500px;
`;

export const ResultValue = styled.strong`
  margin: 10px;
  max-width: 100px;
  padding: 3px;
`;