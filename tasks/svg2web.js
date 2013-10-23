/*
 * grunt-svg2web
 * https://github.com/frankfoerster/grunt-svg2web
 *
 * Copyright (c) 2013 Frank Förster
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  var fs = require('fs');
  var svg2ttf = require('svg2ttf');

  grunt.registerMultiTask('svg2web', 'Convert svg to ttf, otf, woff and eot', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options();

    // Iterate over all specified file groups.
    this.files.forEach(function(file) {
      var ttf;
      var svg = file.src
        .filter(function(filepath) {
          if (!grunt.file.exists(filepath)) {
            grunt.log.warn('Source file "' + filepath + '" not found.');
            return false;
          } else {
            return true;
          }
        })
        .map(grunt.file.read)
        .join(grunt.util.normalizelf(grunt.util.linefeed));

      try {
        ttf = svg2ttf(grunt.file.read(file.src));
      } catch (err) {
        grunt.warn(file.src + '\n' + err);
      }

      if (ttf.buffer.length < 1) {
        grunt.log.warn('TTF not created because svg was empty.');
      } else {
        var ttfDest = file.dest + '.ttf';
        grunt.file.write(ttfDest, new Buffer(ttf.buffer));
        grunt.log.writeln('File "' + ttfDest + '" created.');
      }
    });
  });

};
