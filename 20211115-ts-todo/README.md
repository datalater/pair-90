# 푸름

- input type checkbox에 value가 아니라 checked로 사용할 수 있음.

# 민철

- 버튼이 폼 태그 안에 있으면 자동으로 버튼의 타입이 submit으로 잡힌다.
- 버튼의 타입이 자동으로 submit으로 잡히면, 버튼에 대해 클릭이벤트가 발생하면 formEvent로 처리된다.
- ReactChild vs ReactNode
  - 포함관계: `ReactNode > ReactChild > ReactElement`
  - ReactNode가 가장 큰 범위
  - ReactChild: ReactElement | ReactText
  - ReactElement
  - `children: ReactChildren`
# TODO

- `{} as ITaskContext`에서 as의 정확한 의미? 다운 캐스팅?
-  ctrl + space 익스텐션??


type ReactNode = | ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;

type ReactChild = ReactElement | ReactText;
