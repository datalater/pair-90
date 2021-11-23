# TIL

## 민철

### pipe를 사용해서 포매팅 로직을 하나로 묶기

인풋이 여러 함수를 거쳐서 아웃풋이 나올 때 pipe 함수를 이용서 하나의 코드에서 해결한다

```tsx
// as-is
const handleChange = () => {
  const { value } = e.target;
  setCurrency(seperateThousands(removeNonDigit(value)));
};

// to-be
const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  const { value } = e.target;
  setCurrency(formatCurrency(value));
};

// 구현
import { pipe } from "@fxts/core";
import { removeNonDigit, seperateThousands } from "../utils/string";

export const formatCurrency = (value: string) => {
  return pipe(value, removeNonDigit, seperateThousands);
};
```

### getByRole name 기술 부채

```tsx
const input = screen.getByRole("textbox", {
  name: "currency",
}) as HTMLInputElement;
```

### input의 이름을 label로 지정하는 방법

```html
<label htmlFor="currency">
  curreny
  <input
    type="text"
    name="currency"
    id="currency"
    placeholder="금액을 넣어주세요"
    onChange="{handleChange}"
    value="{currency}"
  />
</label>
```

> [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-associated-control.md)

### input을 찾는 getByRole에 넣어야 하는 role의 이름

role="textbox"

[w3.org](https://www.w3.org/TR/html-aria/#docconformance)
[query 함수 우선순위](https://testing-library.com/docs/queries/about/#priority)

---

### input.value에서 오류가 발생할 때 해결하는 방법

- 문제의 원인은 라이브러리 내에서 `getByPlaceholerText`의 리턴 타입이 `HTMLElement`로 정해져 있으므로 value 속성을 사용할 수 없다는 오류가 발생한 것이다.
- 따라서 해결하려면 직접 `HTMLInputElement`로 타입 별칭을 정한다

```tsx
// Better
const input = getByPlaceholderText("카드번호를 넣어주세요") as HTMLInputElement;
fireEvent.change(input, { target: { value: "4444333322221111" } });
expect(input.value).toBe("4444 3333 2222 1111");

// 이전에 했던 방법
const input = getByPlaceholderText("카드번호를 넣어주세요");
fireEvent.change(input, { target: { value: "4444333322221111" } });
expect((input as HTMLInputElement).value).toBe("4444 3333 2222 1111");
```

### 문자열 잘라서 포맷팅하는 여러 가지 방법

**01 start 인덱스를 생각하는 로직**

```tsx
const value = "4444333322221111";
const format = "#### #### #### ####";

const formatArray = format.split(" ");
console.log(formatArray);

let start = 0;

const result = formatArray
  .map((formatElement) => {
    const slicedString = value.substr(start, formatElement.length);

    console.log(slicedString);

    start += formatElement.length;
    return slicedString;
  })
  .filter((element) => element !== "")
  .join(" ");
```

**02 start 인덱스를 생각하지 않아도 되는 로직**

```tsx
const blocks = [3, 4, 4];
const delimiter = ["-"];

const format = (value: string): => {
  const result = [];

  let inputValue = value;

  blocks.forEach((block) => {
    result.push(inputValue.substr(0, block)); // 처음부터 block 개수만큼 잘라서 result에 추가한다.
    inputValue = inputValue.substr(block); // block 이후의 문자열만 남긴다.
  });

  return result.join(delimiter);
};

// 장점: 문자열을 substr로 자를 때 start 인덱스에 대해서 생각을 안해도 됨
```

### `handleChange = useCallback` 최적화

- 체인지 이벤트(ChangeEvent)를 처리하는 로직은 함수가 리렌더링 되더라도 변하지 않는다.
- 따라서 useCallback으로 메모이제이션을 해서 최적화를 해주는 것을 습관화하자!

## 푸름

```tsx
const { container, debug } = render(<App />);

debug(); // debug는 현재 container를 콘솔에서 볼 수 있다.
```

- 테스팅 이벤트 처리 : https://testing-library.com/docs/dom-testing-library/api-events

```tsx
it("사용자가 숫자를 입력하면 자동으로 포맷팅 한다.", () => {
  const { getByPlaceholderText } = render(<CardNumberFormatInput />);
  const input = getByPlaceholderText(
    "카드번호를 넣어주세요"
  ) as HTMLInputElement;

  fireEvent.change(input, { target: { value: "4444333322221111" } });
  expect(input.value).toBe("4444 3333 2222 1111");
});
```

### getByRole

- getByRole을 활용하여 엘리먼트 찾는 방법 알아보기.

### 천단위 정규식

- `/\B(?=(\d{3})+(?!\d))/g` : 해석해보기..

### pipe

pipe를 활용한 코드 가독성 극대화! 너무 좋다.

### 느낀 점

- 테스트의 장점을 더 알아가는 것 같음
