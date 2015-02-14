var vows = require('vows');
var assert = require('assert');
var suite = vows.describe('jStat.gammafn');

require('../env.js');

suite.addBatch({
  'gammafn': {
    'topic': function() {
      return jStat;
    },

    // Checked against Mathematica Gamma[a]
    'check gammafn': function(jStat) {
      var tol = 0.000001;
      assert.epsilon(tol, jStat.gammafn(0.00001), 99999.422794);
      assert.epsilon(tol, jStat.gammafn(0.2), 4.590843);
      assert.epsilon(tol, jStat.gammafn(10), 362880.0);
      assert.epsilon(tol, jStat.gammafn(-2.7), -0.931083278);
    }
  }
});

suite.export(module);
