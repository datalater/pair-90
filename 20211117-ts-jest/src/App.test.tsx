import { render } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  it("renders greeting", () => {
    const { container } = render(<App />);

    expect(container).toHaveTextContent(/Hello App/);
  });
});
