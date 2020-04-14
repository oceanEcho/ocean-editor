import { AnyAction } from 'redux';

export interface IAppState {
  app: string;
}

export const appInitialState: IAppState = {
  app: 'app',
};

export const appSelector = (state: { app: IAppState}) => state.app;

export const app = (state = appInitialState, action: AnyAction) => {
  switch (action.type) {
    case 'TEST_ACTION':
      const { app } = action;
      return {
        ...state,
        app,
      };
    default:
      return state;
  }
};
