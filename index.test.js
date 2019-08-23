const canWin = require('./index.js');
const assert = require('chai').assert;

describe('canWin', () => {
  it('should return false if empty array', () => {
    assert.isFalse(canWin([], 0));
  });
  it('should return false if bad starting index', () => {
    assert.isFalse(canWin([], 1));
  });
  it('should return false if it can not find a zero', () => {
    assert.isFalse(canWin([1, 1, 1], 1));
  });

  it('should return true if array of 1', () => {
    assert.isTrue(canWin([0], 0));
  });
  it('should return true if it can find it one step to left', () => {
    assert.isTrue(canWin([0, 1, 2], 1));
  });
  it('should return true if it can find it one step to right', () => {
    assert.isTrue(canWin([2, 1, 0], 1));
  });
  it('should return true if it can find it two step to left', () => {
    assert.isTrue(canWin([0, 1, 1], 2));
  });
  it('should return true if it can find it three steps to the left', () => {
    assert.isTrue(canWin([0, 1, 2, 1, 2, 1, 2], 6));
  });
  it('should return true if it can find it three steps to the right', () => {
    assert.isTrue(canWin([1, 1, 2, 1, 2, 1, 2, 1, 0], 2));
  });
});
