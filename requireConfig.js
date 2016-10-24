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
      'app': './resource/js/app',
      'arteProject' : './resource/js/common',
      'sub' : './resource/js/sub'
    },

    // dependency config
    shim: {
      'jquery-migrate': ['jquery'],
      'jquery-ui': ['jquery-migrate'],

      'text': ['jquery-migrate'],
      'css': ['text'],

      'jquery-dot' : ['css'],

      'app': ['jquery-dot'],
      'arteProject': ['app'],
      'sub' : ['app']
    }
  });

require(['arteProject', 'sub' ], function(arteProject, sub) {
    $(document).ready(function (arteProject, sub) {

    });// $(document).ready
  }
);// require

