import { configureStore } from "@reduxjs/toolkit";
import { siteReducer } from "../../features/site/reducer/reducer";

export const appStore = configureStore({
    reducer: {
        sites: siteReducer,
    },
});
