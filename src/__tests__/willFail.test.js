import { alwaysFails } from '../willFail.js';

describe('Failing Tests', () => {
  test('this test will fail', () => {
    expect(alwaysFails()).not.toBe('correct');
  });
});
