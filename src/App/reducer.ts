import { AnyAction } from 'redux';
import { LOGIN_SUCCESS } from '../pages/Login/actions';

export interface IAppState {
  config: {
    apiUrl: string;
  };
  test: string;
  authorized: boolean;
}

export const appInitialState: IAppState = {
  config: {
    apiUrl: 'http://localhost:4000',
  },
  test: '',
  authorized: false,
};

export const appSelector = (state: { app: IAppState }) => state.app;

export const app = (state = appInitialState, action: AnyAction) => {
  switch (action.type) {
    case 'TEST_ACTION': {
      const { test } = action;
      return {
        ...state,
        test,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        authorized: true,
      };
    }
    default:
      return state;
  }
};
