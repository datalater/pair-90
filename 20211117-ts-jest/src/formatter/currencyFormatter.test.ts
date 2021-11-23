import { formatCurrency } from "./currencyFormatter";

describe("화폐 포매터", () => {
  it("숫자를 입력하면 천단위 콤마를 찍어서 화폐형태로 포매팅 한다", () => {
    expect(formatCurrency("12345")).toBe("12,345");
  });
});
