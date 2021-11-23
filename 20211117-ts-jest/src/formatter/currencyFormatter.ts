import { pipe } from "@fxts/core";
import { removeNonDigit, seperateThousands } from "../utils/string";

export const formatCurrency = (value: string) => {
  return pipe(value, removeNonDigit, seperateThousands);
};
