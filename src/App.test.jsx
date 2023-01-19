import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { App } from "./App";
import { appStore } from "./infrasctructure/store/store";

test("renders A3player", () => {
    render(
        <Router>
            <Provider store={appStore}>
                <App />
            </Provider>
        </Router>
    );
    const linkElement = screen.getByText(/A3player/i);
    expect(linkElement).toBeInTheDocument();
});
