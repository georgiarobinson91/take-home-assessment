import "@testing-library/jest-dom";
import Page from "@/app/page";
import { describe, it } from "node:test";
import { expect } from "@jest/globals";
import React from "react";
import { render, screen } from "@testing-library/react";

describe("Page", () => {
  it("renders the first question", () => {
    render(<Page />);
    const question = screen.getByText(
      "Have you ever suffered from an eating disorder such as Anorexia Nervosa or Bulimia?"
    );
    expect(question).toBeInTheDocument();
  });
});
