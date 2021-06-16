/**
 * @jest-environment jsdom
 */
import React from "react";
import { screen } from "@testing-library/dom";
import { renderTheme } from "../../styles/render-theme";
import Home from ".";
// import { theme } from "../../styles/theme";

// eslint-disable-next-line no-undef
test("renders learn react link", () => {
  renderTheme(<Home />);
  const headingContainer = screen.getByRole("heading", {
    name: "hello",
  }).parentElement;
  // eslint-disable-next-line no-undef
  expect(headingContainer).toHaveStyle({ background: "theme.colors.mainBg" });
  // debug();
  // eslint-disable-next-line no-undef
  // expect(headingContainer).toHaveStyleRule("background", "yellow");q
  // eslint-disable-next-line no-undef
  expect(headingContainer).toHaveStyleRule("background", "yellow");
});

// expect(button).toHaveStyle(`background-color: red; display: none;`);
