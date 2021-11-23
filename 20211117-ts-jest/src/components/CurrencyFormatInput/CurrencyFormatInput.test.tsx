import { render, screen, fireEvent } from "@testing-library/react";

import CurrencyFormatInput from "./CurrencyFormatInput";

describe("CurrencyFormatInput", () => {
  it("사용자가 숫자만 입력할 수 있다", () => {
    render(<CurrencyFormatInput />);

    const input = screen.getByPlaceholderText(
      "금액을 넣어주세요"
    ) as HTMLInputElement;

    fireEvent.change(input, { target: { value: 123 } });
    expect(input.value).toBe("123");

    fireEvent.change(input, { target: { value: "a" } });
    expect(input.value).toBe("");
  });

  it("사용자가 숫자를 입력하면 천 단위로 콤마를 찍어서 표시한다", () => {
    render(<CurrencyFormatInput />);

    const input = screen.getByPlaceholderText(
      "금액을 넣어주세요"
    ) as HTMLInputElement;

    fireEvent.change(input, { target: { value: 1234 } });
    expect(input).toHaveValue("1,234");
  });
});
