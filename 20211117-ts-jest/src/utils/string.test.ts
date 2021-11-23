import { seperateThousands, removeNonDigit } from "./string";

describe("문자열 유틸", () => {
  it("숫자를 입력하면 천 단위로 콤마를 찍어서 반환한다", () => {
    expect(seperateThousands("1234")).toBe("1,234");
    expect(seperateThousands("12345678")).toBe("12,345,678");
  });

  it("숫자가 아닌 값을 입력하면 제거한다", () => {
    expect(removeNonDigit("abc")).toBe("");
    expect(removeNonDigit("1a2b3c")).toBe("123");
  });
});
