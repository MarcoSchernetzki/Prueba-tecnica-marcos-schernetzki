import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { App } from "./App";
import { appStore } from "./infrasctructure/store/store";

test("renders proximamente", () => {
    render(
        <Router>
            <Provider store={appStore}>
                <App />
            </Provider>
        </Router>
    );
    const linkElement = screen.getByText(/proximamente/i);
    expect(linkElement).toBeInTheDocument();
});
