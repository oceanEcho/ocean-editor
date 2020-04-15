import { app, appInitialState } from "./reducer";

describe('App reducer test', () => {
  it('testAction returns state and data from action', () => {
    const result = app(appInitialState, { type: 'TEST_ACTION', test: 'test' });

    expect(result.test).toBe('test');
  })
})