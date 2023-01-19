import { actionSite } from "./action.types";
import { siteReducer } from "./reducer";

describe("Given the function siteReducer", () => {
    const siteMock = [
        {
            name: "site name",
            id: "2",
        },
    ];

    describe("When the action is load", () => {
        test("Then the returned state should be the action payload", () => {
            const action = {
                type: actionSite.load,
                payload: siteMock,
            };
            const state = { sites: [] };
            const result = siteReducer(state, action);
            expect(result).toEqual({ sites: action.payload });
        });
    });
    describe("When the action is add", () => {
        test("Then the returned state should include the action payload", () => {
            const action = {
                type: actionSite.add,
                payload: siteMock[0],
            };
            const state = { sites: [] };
            const result = siteReducer(state, action);
            expect(result).toEqual({ sites: [action.payload] });
        });
    });
    describe("When the action is update", () => {
        test("Then the returned state should include the action payload", () => {
            const action = {
                type: actionSite.update,
                payload: { ...siteMock[0], name: "Update name" },
            };
            const state = { sites: siteMock };
            const result = siteReducer(state, action);
            expect(result).toEqual({ sites: [action.payload] });
        });
    });
    describe("When the action is update and the id is not valid", () => {
        test("Then the returned state should be the original state", () => {
            const action = {
                type: actionSite.update,
                payload: { ...siteMock, id: 1, name: "Update name" },
            };
            const state = { sites: [siteMock] };
            const result = siteReducer(state, action);
            expect(result).toEqual(state);
        });
    });
    describe("When the action is select", () => {
        test("Then the returned state should be the original state", () => {
            const action = {
                type: actionSite.select,
                payload: siteMock[0],
            };
            const state = { sites: siteMock, selectedSite: null };
            const result = siteReducer(state, action);
            expect(result).toEqual({
                sites: siteMock,
                selectedSite: siteMock[0],
            });
        });
    });
    describe("When the action is delete", () => {
        test("Then the returned state should not include the action payload", () => {
            const action = {
                type: actionSite.delete,
                payload: "2",
            };
            const state = { sites: siteMock };
            const result = siteReducer(state, action);
            expect(result).toEqual({ sites: [] });
        });
    });

    describe("When the action is delete and the id is not valid", () => {
        test("Then the returned state should should be the original state", () => {
            const action = {
                type: actionSite.delete,
                payload: "1",
            };
            const state = { sites: siteMock };
            const result = siteReducer(state, action);
            expect(result).toEqual(state);
        });
    });

    describe("When the action is any other", () => {
        test("Then the returned state should be ...", () => {
            const action = {
                type: "",
                payload: null,
            };
            const state = { sites: siteMock };
            const result = siteReducer(state, action);
            expect(result).toEqual(state);
        });
    });
});
