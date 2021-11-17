import { render } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  it("화폐를 포맷팅 한다.", () => {
    const { container, queryByPlaceholderText } = render(<App />);

    expect(container).toHaveTextContent(/화폐 포맷팅/);
    expect(queryByPlaceholderText("화폐 숫자를 넣어주세요")).not.toBeNull();
  });
});

// TDD : Red -> Green -> Refactor
/*
1. 화폐 포맷팅
  - input 컨트롤이 있는지 없는 여부를 플레이스홀더로 테스트
  - 실제로 input에 4444333322221111을 입력했을 때 포맷에 맞춰 공백이 생기는지 테스트

2.
*/
