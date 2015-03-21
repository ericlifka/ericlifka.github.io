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
                sourceMap: true,
                sourceRoot: 'js',
                modules: 'amd'
            },
            dist: {
                files: {
                    'resources/app.js': 'js/app.js'
                }
            }
        },
        copy: {
            main: {
                src: 'node_modules/requirejs/require.js',
                dest: 'resources/require.js'
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