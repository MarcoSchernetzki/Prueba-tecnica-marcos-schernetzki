import { renderHook } from "@testing-library/react";
import { Provider } from "react-redux";
import { appStore } from "../../../infrasctructure/store/store";
import { useSite } from "./useSite";
import { SiteRepository } from "../service/siteRepository";

const mockSites = {
    sites: [
        {
            name: "site name",
            id: "7",
        },
    ],
};

describe("Given useSite", () => {
    const wrapper = ({ children }) => (
        <Provider store={appStore}>{children}</Provider>
    );
    const { result } = renderHook(() => useSite(), { wrapper });

    describe("When it has been run handleAdd and it has called handleAdd", () => {
        beforeEach(() => {
            SiteRepository.prototype.post = jest
                .fn()
                .mockResolvedValue(mockSites.sites[0]);
        });
        test("Then should return a Promise of site", async () => {
            result.current.handleAdd(mockSites.sites[0]);

            expect(SiteRepository.prototype.post).toHaveBeenCalled();
        });
        test("Then should return an error", async () => {
            const error = new Error("");

            result.current.handleAdd(mockSites.sites[1]);

            expect(error).toBeInstanceOf(Error);
        });
    });
    describe("When it has been run handleLoad and it has called handleLoad", () => {
        beforeEach(() => {
            SiteRepository.prototype.getAll = jest
                .fn()
                .mockResolvedValue(mockSites.sites);
        });
        test("Then should return a promise of site created", async () => {
            result.current.handleLoad();
        });
        test("Then should return a promise of the site selected", async () => {
            result.current.handleLoad();

            expect(SiteRepository.prototype.getAll).toHaveBeenCalled();
        });
    });
    describe("When it has been run handleLoad and has failed", () => {
        beforeEach(() => {
            SiteRepository.prototype.getAll = jest
                .fn()
                .mockRejectedValue(mockSites.sites);
        });
        test("Then should return a promise of the site selected", async () => {
            result.current.handleLoad();

            expect(SiteRepository.prototype.getAll).toHaveBeenCalled();
        });
    });
});
