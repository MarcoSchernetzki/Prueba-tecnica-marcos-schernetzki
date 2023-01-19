import { createReducer } from "@reduxjs/toolkit";
import * as ac from "./action.creator";

const initialState = { sites: [] };

export const siteReducer = createReducer(initialState, (builder) => {
    builder.addCase(ac.loadActionSite, (state, action) => ({
        ...state,
        sites: action.payload,
    }));
    builder.addCase(ac.addActionSite, (state, action) => ({
        ...state,
        sites: [...state.sites, action.payload],
    }));
    builder.addCase(ac.updateActionSite, (state, action) => ({
        ...state,
        sites: state.sites.map((item) =>
            item.id === action.payload.id ? action.payload : item
        ),
    }));
    builder.addCase(ac.deleteActionSite, (state, action) => ({
        ...state,
        sites: state.sites.filter((item) => item.id !== action.payload),
    }));
    builder.addDefaultCase((state) => state);
});
