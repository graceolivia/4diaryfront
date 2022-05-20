import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders image", () => {
  render(<App />);
  const linkElement = screen.getByText(
    /This is not the greatest app in the world/i
  );
  expect(linkElement).toBeInTheDocument();
});
