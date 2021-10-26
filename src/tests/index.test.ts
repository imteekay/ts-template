import { Hello } from 'index';

describe('Hello', () => {
  it('returns hello ts', () => {
    expect(Hello()).toEqual('Hello TS');
  });
});
