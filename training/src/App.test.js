import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
  describe("dans un etat particulier", () => {
    let container;

    beforeEach(() => {
      container = render(<App />).container;
    });

    it("renders a title", () => {
      expect(container.querySelector("h1")).toHaveTextContent("Hello World");
    });

    it("renders a substitle", () => {
      expect(container.querySelector("p")).toHaveTextContent("Bulma");
    });
  });
});
