var vows = require('vows');
var assert = require('assert');
var suite = vows.describe('jStat.crosstab');

require('../env.js');

suite.addBatch({
  'crosstab': {
    'topic': function() {
      return jStat;
    },
    'returns crosstab': function(jStat) {
      assert.deepEqual(
          jStat.crosstab([[1, 0, -30], [1, 1, -10], [2, 0, 75], [2, 1, 95]]),
          { 1: { 0: -30, 1: -10}, 2: {0: 75, 1: 95}});
    },
  }
});

suite.export(module);

