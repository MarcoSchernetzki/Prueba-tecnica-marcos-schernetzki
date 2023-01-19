import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { App } from "./App";

test("renders proximamente", () => {
    render(
        <Router>
            <App />
        </Router>
    );
    const linkElement = screen.getByText(/Proximamente/i);
    expect(linkElement).toBeInTheDocument();
});
