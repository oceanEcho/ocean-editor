import { Action } from 'redux';

export const TEST_ACTION = 'TEST_ACTION';

export interface ITestAction extends Action {
  type: typeof TEST_ACTION;
  app: string;
}

export const testAction = (app: string): ITestAction => {
  return {
    type: TEST_ACTION,
    app,
  };
};

export type IAppActions = ITestAction;
