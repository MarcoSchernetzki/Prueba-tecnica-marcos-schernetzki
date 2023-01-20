import { createReducer } from "@reduxjs/toolkit";
import * as ac from "./action.creator";

const initialState = { sites: [], selectedSite: null };

export const siteReducer = createReducer(initialState, (builder) => {
    builder.addCase(ac.loadActionSite, (state, action) => ({
        ...state,
        sites: action.payload,
    }));
    builder.addCase(ac.addActionSite, (state, action) => ({
        ...state,
        sites: [...state.sites, action.payload],
    }));
    builder.addCase(ac.updateActionSite, (state, action) => {
        return {
            ...state,
            sites: state.sites.map((item) =>
                item._id === action.payload._id ? action.payload : item
            ),
        };
    });
    builder.addCase(ac.selectActionCreator, (state, action) => ({
        ...state,
        selectedSite: action.payload,
    }));
    builder.addCase(ac.deleteActionSite, (state, action) => ({
        ...state,
        sites: state.sites.filter((item) => item._id !== action.payload),
    }));
    builder.addDefaultCase((state) => state);
});
