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

    it("should render a table", () => {
      expect(container.querySelector("table")).toBeInTheDocument();
    });

    it("should render a 4 trs inside a tbody", () => {
      expect(container.querySelectorAll("tbody tr").length).toBe(4);
    });

    it("should render the good second line", () => {
      expect(
        container.querySelector("tbody tr:nth-child(2) td:nth-child(1)")
      ).toHaveTextContent("C-3PO");
    });
  });
});
