import { renderHook } from "@testing-library/react";
import { Provider } from "react-redux";
import { appStore } from "../../../infrasctructure/store/store";
import { useSite } from "./useSite";
import { SiteRepository } from "../service/siteRepository";

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: jest.fn(),
}));

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
        test("When it has been run handleAdd and has failed", async () => {
            SiteRepository.prototype.post = jest
                .fn()
                .mockRejectedValue(mockSites.sites);
            result.current.handleAdd(mockSites.sites[1]);
            expect(SiteRepository.prototype.post).toHaveBeenCalled();
        });
    });
    describe("When it has been run handleLoad and it has called handleLoad", () => {
        test("Then should return a promise of the sites", async () => {
            SiteRepository.prototype.getAll = jest
                .fn()
                .mockResolvedValue(mockSites.sites);
            result.current.handleLoad();

            expect(SiteRepository.prototype.getAll).toHaveBeenCalled();
        });
        test("When it has been run handleLoad and has failed", async () => {
            SiteRepository.prototype.getAll = jest
                .fn()
                .mockRejectedValue(mockSites.sites);
            result.current.handleLoad();
            expect(SiteRepository.prototype.getAll).toHaveBeenCalled();
        });
    });
    describe("When it has been run handleSelect and it has called handleSelect", () => {
        test("Then should return a promise of the site", async () => {
            SiteRepository.prototype.get = jest
                .fn()
                .mockResolvedValue(mockSites.sites[0]);
            result.current.handleSelect(mockSites.sites[0].id);
            expect(SiteRepository.prototype.get).toHaveBeenCalled();
        });
        test("When it has been run handleSelect and has failed", async () => {
            SiteRepository.prototype.get = jest
                .fn()
                .mockRejectedValue(mockSites.sites[0]);
            result.current.handleSelect("4");
            expect(SiteRepository.prototype.get).toHaveBeenCalled();
        });
    });
    describe("When it has been run handleDelete and it has called handleDelete incorrectly", () => {
        test("Then should deleted", async () => {
            SiteRepository.prototype.delete = jest
                .fn()
                .mockResolvedValue(mockSites.sites[0]);
            result.current.handleDelete(mockSites.sites[0].id);

            expect(SiteRepository.prototype.delete).toHaveBeenCalled();
        });
    });
});
