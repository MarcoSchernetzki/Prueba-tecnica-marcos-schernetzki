import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { appStore } from "../../../infrasctructure/store/store";
import { UpdatePage } from "./updatePage";
import { Provider } from "react-redux";

describe("Given the update form component", () => {
    test("Then it should display <edita>", () => {
        render(
            <Router>
                <Provider store={appStore}>
                    <UpdatePage />
                </Provider>
            </Router>
        );
        const element = screen.getByText(/Edita/i);
        expect(element).toBeInTheDocument();
    });
});
