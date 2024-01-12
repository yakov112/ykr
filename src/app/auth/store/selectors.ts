import {createFeatureSelector, createSelector} from '@ngrx/store'
import {AuthStateInterface} from "../types/authState.interface";
import {AppStateInterface} from "../../shared/types/appState.interface";


export const authFeatureSelector = createFeatureSelector<
  AuthStateInterface
>('auth');

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isSubmitting
);
