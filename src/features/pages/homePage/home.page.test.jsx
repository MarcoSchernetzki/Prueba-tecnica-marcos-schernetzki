import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";
import { HomePage } from "./homePage";
import { MemoryRouter as Router } from "react-router-dom";
import { appStore } from "../../../infrasctructure/store/store";
import { mockStore } from "../../../mock/mock.store";

describe("Given home.page component", () => {
    describe("When we render the component", () => {
        test("Then it should display loading", () => {
            render(
                <Router>
                    <Provider store={appStore}>
                        <HomePage />
                    </Provider>
                </Router>
            );
            const element = screen.getByPlaceholderText(/loading/i);
            expect(element).toBeInTheDocument();
        });
        test("Then it should display", () => {
            render(
                <Router>
                    <Provider store={mockStore}>
                        <HomePage />
                    </Provider>
                </Router>
            );
            const element = screen.getByText(/Detalles/i);
            expect(element).toBeInTheDocument();
            userEvent.click(screen.getByText(/Detalles/i));
            userEvent.click(screen.getByText(/Eliminar/i));
        });
    });
});
