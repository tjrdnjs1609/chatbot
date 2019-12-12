const assert = require('assert');
const { sayHello } = require('./app');

describe('App test!', () => {
  it('sayHello should return hello', (done) => {
    assert.equal(sayHello(), 'helloo');
    done();
  });
});
