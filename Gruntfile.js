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
        watch: {
            files: ['**/*.less'],
            tasks: ['less']
        }
    });

    grunt.registerTask('default', ['watch']);
};