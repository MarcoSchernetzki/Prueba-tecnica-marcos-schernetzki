import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { MemoryRouter as Router } from "react-router-dom";
import { appStore } from "../../../../infrasctructure/store/store";
import CreateForm from "./createForm";

describe("Given the create.form component", () => {
    test("It should display «cancelar» button", () => {
        render(
            <Router>
                <Provider store={appStore}>
                    <CreateForm />
                </Provider>
            </Router>
        );
        const firstTextInput = screen.getByPlaceholderText(/nombre/i);
        expect(firstTextInput).toBeInTheDocument();
        userEvent.click(screen.getByText(/cancelar/i));
    });

    test("It should display «guardar» button", () => {
        render(
            <Router>
                <Provider store={appStore}>
                    <CreateForm />
                </Provider>
            </Router>
        );
        const element = screen.getByText(/guardar/i);
        expect(element).toBeInTheDocument();
        fireEvent.click(screen.getByText("Guardar"));
        fireEvent.input(screen.getByPlaceholderText(/nombre/i));
    });
});
