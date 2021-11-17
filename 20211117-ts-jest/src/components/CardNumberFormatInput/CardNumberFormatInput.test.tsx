import { render, fireEvent } from "@testing-library/react";

import CardNumberFormatInput from "./CardNumberFormatInput";

describe("CardNumberFormatInput", () => {
  it("카드번호를 쓸 수 있는 input 컨트롤이 있다.", () => {
    const { container, queryByPlaceholderText } = render(
      <CardNumberFormatInput blocks={[4, 4, 4, 4]} delimiter=" " />
    );

    expect(container).toHaveTextContent(/카드번호 포맷팅/);
    expect(queryByPlaceholderText("카드번호를 넣어주세요")).not.toBeNull();
  });

  it("사용자가 숫자를 입력하면 자동으로 포맷팅 한다.", () => {
    const { getByPlaceholderText } = render(
      <CardNumberFormatInput blocks={[4, 4, 4, 4]} delimiter=" " />
    );

    const input = getByPlaceholderText(
      "카드번호를 넣어주세요"
    ) as HTMLInputElement;
    fireEvent.change(input, { target: { value: "4444333322221111" } });
    expect(input.value).toBe("4444 3333 2222 1111");
  });
});
