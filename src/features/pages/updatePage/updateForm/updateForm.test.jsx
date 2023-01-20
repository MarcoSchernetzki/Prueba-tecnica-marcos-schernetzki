import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { appStore } from "../../../../infrasctructure/store/store";
import { mockStore } from "../../../../mock/mock.store";
import { UpdateForm } from "./updateForm";

describe("Given the updateForm component", () => {
    test("It should update a user after clicking in «guardar» button", () => {
        render(
            <Router>
                <Provider store={mockStore}>
                    <UpdateForm />
                </Provider>
            </Router>
        );
        fireEvent.input(screen.getByPlaceholderText(/nombre/i));
        userEvent.click(screen.getByText(/guardar/i));
    });

    test("It should cancel and go home", () => {
        render(
            <Router>
                <Provider store={appStore}>
                    <UpdateForm />
                </Provider>
            </Router>
        );
        const element = screen.getByText(/cancelar/i);
        expect(element).toBeInTheDocument();
        userEvent.click(screen.getByText(/cancelar/i));
    });
});
