import React from "react";
import App from "./App";

import * as rtl from "@testing-library/react";

// afterEach(rtl.cleanup);

it("renders without crashing", () => {
  const wrapper = rtl.render(<App />);
  rtl.cleanup;
});

it("contains a player name", () => {
  const wrapper = rtl.render(<App />);
  const playerName = wrapper.queryByText(/player name: [.*?]/i);
  expect(playerName).toBeInTheDocument;
  rtl.cleanup;
});

it("contains a player id", () => {
  const wrapper = rtl.render(<App />);
  expect(wrapper.queryByPlaceholderText(/player id: [.*?]/i));
  rtl.cleanup;
});
