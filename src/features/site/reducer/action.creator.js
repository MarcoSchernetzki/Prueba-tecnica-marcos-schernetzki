import { createAction } from "@reduxjs/toolkit";
import { actionSite } from "./action.types";

export const loadActionSite = createAction(actionSite.load);
export const addActionSite = createAction(actionSite.add);
export const updateActionSite = createAction(actionSite.update);
export const deleteActionSite = createAction(actionSite.delete);
