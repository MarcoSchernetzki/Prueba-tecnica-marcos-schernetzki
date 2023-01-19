import { render, screen } from "@testing-library/react";
import { App } from "./App";

test("renders proximamente", () => {
    render(<App />);
    const linkElement = screen.getByText(/proximamente/i);
    expect(linkElement).toBeInTheDocument();
});
