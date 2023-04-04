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
  background: hsla(0, 0%, 90%, 0.925);
  padding: 0 5px;
`;

export const Legend = styled.legend`
  background: hsl(180, 100%, 25%);
  border-radius: 10px;
  padding: 5px 10px;
  text-align: left;
  color: beige;
  border-width: 1px;
  border-top-style: inset;
  border-right-style: inset;
  border-top-color: hsl(0, 0%, 70%);
  border-right-color: hsl(0, 0%, 80%);
`;

export const FormLine = styled.p`
  margin: ${({ margin }) => margin || "10px"};
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
  max-width: 350px;
  border-width: 2px;
  border-top-style: inset;
  border-right-style: inset;
  border-bottom-style: none;
  border-left-style: none;
  border-top-color: hsl(0, 0%, 70%);
  border-right-color: hsl(0, 0%, 80%);

  &:required {
    background: hsl(0, 0%, 85%)
  };

  &:hover {
    background: hsl(0, 0%, 90%)
  };

  &:active {
    background: hsl(0, 0%, 80%)
  };
`;

export const Button = styled.button`
  margin: 5px auto;
  width: 100%;
  padding: 3px 0;
  background: teal;
  color: beige;
  border-radius: 5px;
  border: none;
  border-width: 2px;
  border-top-style: inset;
  border-right-style: inset;
  border-top-color: hsl(0, 0%, 70%);
  border-right-color: hsl(0, 0%, 80%);

  &:hover {
    background: hsl(180, 100%, 20%);
  };

  &:active {
    background: hsl(180, 100%, 45%);
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