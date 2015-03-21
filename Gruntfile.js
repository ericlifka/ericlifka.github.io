var loadGruntTasks = require('load-grunt-tasks');

module.exports = function (grunt) {
    loadGruntTasks(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                paths: ['styles'],
                files: {
                    "./styles.css": "./styles/styles.less"
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
                    'app.js': 'js/app.js'
                }
            }
        },
        watch: {
            files: [
                'styles/**/*.less',
                'js/**/*.js'
            ],
            tasks: [
                'less',
                'babel'
            ]
        }
    });

    grunt.registerTask('default', ['watch']);
};