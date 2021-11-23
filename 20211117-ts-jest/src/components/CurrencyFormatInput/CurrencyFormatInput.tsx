import { ChangeEvent, useCallback, useState } from "react";
import { formatCurrency } from "../../formatter/currencyFormatter";

const CurrencyFormatInput = () => {
  const [currency, setCurrency] = useState("");

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCurrency(formatCurrency(value));
  }, []);

  return (
    <>
      <div>화폐 포맷팅</div>
      <form>
        <label htmlFor="currency">
          curreny
          <input
            type="text"
            name="currency"
            id="currency"
            placeholder="금액을 넣어주세요"
            onChange={handleChange}
            value={currency}
          />
        </label>
      </form>
    </>
  );
};

export default CurrencyFormatInput;
