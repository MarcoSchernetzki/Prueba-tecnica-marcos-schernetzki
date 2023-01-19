import { configureStore } from "@reduxjs/toolkit";
import { siteReducer } from "../features/site/reducer/reducer";

export const siteMock = {
    id: "1",
    name: "mock site",
};

export const preloadedState = {
    sites: {
        sites: [siteMock],
    },
};

export const mockStore = configureStore({
    reducer: {
        sites: siteReducer,
    },
    preloadedState,
});

