import { app, appInitialState } from "./reducer"
import { testAction } from './actions';

describe('App reducer test', () => {
  it('testAction returns state and data from action', () => {
    const result = app(appInitialState, testAction('test'));

    expect(result.app).toBe('test');
  })
})