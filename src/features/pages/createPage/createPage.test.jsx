import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { appStore } from "../../../infrasctructure/store/store";
import { MemoryRouter as Router } from "react-router-dom";
import { CreatePage } from "./createPage";

describe("Given createPage component", () => {
    describe("When we render the component", () => {
        test("Then it should display <Añade>", () => {
            render(
                <Router>
                    <Provider store={appStore}>
                        <CreatePage />
                    </Provider>
                </Router>
            );
            const element = screen.getByText(/Añade/i);
            expect(element).toBeInTheDocument();
        });
    });
});
