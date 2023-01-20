import { render, screen } from "@testing-library/react";
import { Header } from "./header";
import { Provider } from "react-redux";
import { MemoryRouter as Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { appStore } from "../../store/store";

describe("Given header component", () => {
    describe("When we render the component", () => {
        test("It should display logo atres player", () => {
            render(
                <Router>
                    <Provider store={appStore}>
                        <Header />
                    </Provider>
                </Router>
            );
            const result = screen.getByText(/player/i);
            expect(result).toBeInTheDocument();
            userEvent.click(screen.getByAltText(/logo/i));
        });
    });
});
