# TIL

## 민철

### input.value에서 오류가 발생할 때 해결하는 방법

- 라이브러리 내에서 `getByPlaceholerText`의 리턴타입이 `HTMLElement`로 정해져 있으므로 직접 `HTMLInputElement`로 타입 별칭을 정한다

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

const format = (value: string): string => {
  const result = [];

  let inputValue = value;

  blocks.forEach((block) => {
    result.push(inputValue.substr(0, block));
    inputValue = inputValue.substr(block);
  });

  return result.join(delimiter);
};

/* 장점
- 문자열을 substr로 자를 때 start 인덱스에 대해서 생각을 안해도 됨
*/
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
