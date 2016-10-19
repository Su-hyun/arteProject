'use strict';

require
  .config({
    baseUrl: '',
    waitSeconds: 30,
    paths: {
      // jquery
      'jquery': './lib/jquery/dist/jquery.min',
      'jquery-ui': './lib/jquery-ui/jquery-ui.min',
      'jquery-migrate': './lib/jquery-migrate/jquery-migrate.min',

      'text': './lib/text/text',
      'css': './lib/require-css/css.min',

      'jquery-dot' : './lib/jquery-dot/jquery.dotdotdot.min',
      'app': './common/js/app',
      'main' : './common/js/main',
      'sub' : './common/js/sub'
    },

    // dependency config
    shim: {
      'jquery-migrate': ['jquery'],
      'jquery-ui': ['jquery-migrate'],

      'text': ['jquery-migrate'],
      'css': ['text'],

      'jquery-dot' : ['css'],

      'app': ['jquery-dot'],
      'main': ['app'],
      'sub' : ['app']
    }
  });

require(['main', 'sub' ], function(main,sub) {
    $(document).ready(function (main, sub) {

    });// $(document).ready
  }
);// require