// enable some of the new ESx features
'use strict';

// Beyond the frontier of ES6
require( 'babel-register' )( {
  // use .babelrc
  babelrc: true
} );

// require the generator
exports = module.exports = require( './generator' );
