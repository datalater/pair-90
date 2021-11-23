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
사용자 중심

1. 카드넘버 포맷팅
  - input 컨트롤이 있는지 없는 여부를 플레이스홀더로 테스트
  - 실제로 input에 4444 3333 2222 1111을 입력했을 때 포맷에 맞춰 공백이 생기는지 테스트

2. 화폐 포맷팅
- 1) 사용자가 숫자만 입력할 수 있다
- 2) 사용자가 숫자를 입력하면 천 단위로 콤마를 찍어서 표시한다
- 3) 사용자가 숫자를 입력하면 외화 기호를 가장 앞에 표시한다
*/
