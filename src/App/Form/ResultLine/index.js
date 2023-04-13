import { FormLine, Strong } from "../styled";

export const ResultLine = ({ result, convertedAmount }) => (
  <FormLine margin="10px 0">
    Przewalutana kwota
    {result.newValue !== "" && result.newValue !== 0 && (
      <Strong>
        {parseFloat(result.newValue).toFixed(2)}&nbsp;{result.inputCurrency} = {convertedAmount.toFixed(2)}&nbsp;{result.outputCurrency}
      </Strong>
    )}
  </FormLine>
);