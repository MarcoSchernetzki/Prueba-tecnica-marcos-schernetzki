import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { mockStore } from "../../../mock/mock.store";
import { appStore } from "../../../infrasctructure/store/store";
import { MemoryRouter as Router } from "react-router-dom";
import { DetailsPage } from "./detailsPage";

describe("Given detailPage component", () => {
    describe("When we render the component", () => {
        test("Then it should display detail", () => {
            render(
                <Router>
                    <Provider store={mockStore}>
                        <DetailsPage />
                    </Provider>
                </Router>
            );
            const element = screen.getByText(/Detalle/i);
            expect(element).toBeInTheDocument();
            userEvent.click(screen.getByText(/Volver/i));
        });
        test("Then it should display loading", () => {
            render(
                <Router>
                    <Provider store={appStore}>
                        <DetailsPage />
                    </Provider>
                </Router>
            );
            const element = screen.getByText(/Loading/i);
            expect(element).toBeInTheDocument();
        });
    });
});
