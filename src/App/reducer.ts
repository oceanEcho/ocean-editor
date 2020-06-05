import { AnyAction } from 'redux';
import { LOGIN_SUCCESS } from '../pages/Login/actions';
import { GET_USER_SUCCESS, SET_AUTH } from './actions';
import { RouterState } from 'connected-react-router';

export interface IAppState {
  config: {
    apiUrl: string;
  };
  test: string;
  authenticated: boolean | null;
}

export const appInitialState: IAppState = {
  config: {
    apiUrl: 'http://localhost:4000',
  },
  test: '',
  authenticated: null,
};

export const appSelector = (state: { app: IAppState }) => state.app;

export const routerSelector = (state: { router: RouterState }) => state.router;

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
      const { data } = action;

      let authenticated = false;

      if (data) {
        localStorage.setItem('token', data);
        authenticated = true;
      }

      return {
        ...state,
        authenticated,
      };
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        authenticated: true,
      };
    }
    case SET_AUTH: {
      const { authenticated } = action;
      console.log('reducer', authenticated);
      return {
        ...state,
        authenticated,
      };
    }
    default:
      return state;
  }
};
