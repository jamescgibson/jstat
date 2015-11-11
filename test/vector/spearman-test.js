var vows = require('vows');
var assert = require('assert');
var suite = vows.describe('jStat.spearmancoeff');

require('../env.js');

suite.addBatch({
  'spearman': {
    'topic': function() {
      return jStat;
    },
    'return basic spearmancoeff': function(jStat) {
      assert.equal(jStat.spearmancoeff([1, 2, 3, 4], [5, 6, 9, 7]),
                   0.8);
    },
    // R cor(<data>, type="spearman") returns NaN and throws a warning
    'return NaN if standard deviation is 0': function(jStat) {
      assert.isNaN(jStat.spearmancoeff([1, 2, 3], [5, 5, 5]));
    }
  }
});

suite.export(module);
