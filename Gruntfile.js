

'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    simplemocha: {
      options: {
        globals: ['should'],
        timeout: 3000,
        ignoreLeaks: false,
        ui: 'bdd',
        reporter: 'tap'
      },
    }

    all: { src: ['test/**/*.js'] }

    jshint: {
      all: ['Gruntfile.js', 'test/**/*.js'],
      options: {
        jshintrc: true,
        globals: {
          jQuery: true,
          console: true,
          module: true
        }
      },
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', ['simplemocha', 'jshint']);
  /*grunt.registerTask('default', ['build']);
  grunt.registerTask('server', ['default', 'connect', 'watch']);
  grunt.registerTask('build', ['clean', 'copy', 'browserify']); */
};