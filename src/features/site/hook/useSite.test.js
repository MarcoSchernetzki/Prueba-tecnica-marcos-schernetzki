import { renderHook, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { appStore } from "../../../infrasctructure/store/store";
import { useSite } from "./useSite";
jest.mock("../service/siteRepository");

const sites = {
    sites: {
        name: "site name",
        id: "7",
    },
};

describe("Given useSite", () => {
    const wrapper = ({ children }) => (
        <Provider store={appStore}>{children}</Provider>
    );
    const { result } = renderHook(() => useSite(), { wrapper });

    describe("When it has been run handleAdd and it has called handleAdd", () => {
        test("Then should return a Promise of site", async () => {
            result.current.handleAdd(sites.sites[0]);
            expect(result.current.sites.at(-1)).toEqual(sites.sites);
        });
        test("Then should return an error", async () => {
            const error = new Error("");
            await waitFor(() => {
                result.current.handleAdd(sites);
                expect(error).toBeInstanceOf(Error);
            });
        });
    });
});
