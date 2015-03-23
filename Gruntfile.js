var loadGruntTasks = require('load-grunt-tasks');

module.exports = function (grunt) {
    loadGruntTasks(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                paths: ['styles'],
                files: {
                    "resources/styles.css": "styles/styles.less"
                }
            }
        },
        babel: {
            options: {
                sourceMap: "inline",
                sourceRoot: 'js',
                modules: "common"
            },
            dist: {
                files: {
                    'resources/app.js': 'js/app.js'
                }
            }
        },
        copy: {
            main: {
                src: 'node_modules/babel-core/browser-polyfill.js',
                dest: 'resources/browser-polyfill.js'
            }
        },
        watch: {
            files: [
                'styles/**/*.less',
                'js/**/*.js',
                'node_modules/requirejs/**/*'
            ],
            tasks: [
                'less',
                'babel',
                'copy'
            ]
        }
    });

    grunt.registerTask('default', ['less', 'babel', 'copy', 'watch']);
};