import { createReducer } from "@reduxjs/toolkit";
import * as ac from "./action.creator";

const initialState = [];

export const siteReducer = createReducer(initialState, (builder) => {
    builder.addCase(ac.loadActionSite, (_state, action) => action.payload);
    builder.addCase(ac.addActionSite, (state, action) => [
        ...state,
        action.payload,
    ]);
    builder.addCase(ac.updateActionSite, (state, action) =>
        state.map((item) =>
            item.id === action.payload.id ? action.payload : item
        )
    );
    builder.addCase(ac.deleteActionSite, (state, action) =>
        state.filter((item) => item.id !== action.payload)
    );
    builder.addDefaultCase((state) => state);
});
