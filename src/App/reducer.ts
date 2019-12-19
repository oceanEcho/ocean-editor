import { AnyAction } from 'redux';

export interface IAppState {
  theme: 'light' | 'dark';
}

export const initialState: IAppState = {
  theme: 'light',
};

export const appSelector = (state: { app: IAppState}) => state.app;

export const app = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'SIMPLE_ACTION':
      const { theme } = action;
      return {
        theme,
      };
    default:
      return state;
  }
};
