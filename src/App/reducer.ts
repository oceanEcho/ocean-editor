import { AnyAction } from 'redux';

export interface IAppState {
  config: {
    apiUrl: string;
  };
  test: string;
}

export const appInitialState: IAppState = {
  config: {
    apiUrl: 'http://localhost:4000'
  },
  test: '',
};

export const appSelector = (state: { app: IAppState }) => state.app;

export const app = (state = appInitialState, action: AnyAction) => {
  switch (action.type) {
    case 'TEST_ACTION':
      const { test } = action;
      return {
        ...state,
        test,
      };
    default:
      return state;
  }
};
