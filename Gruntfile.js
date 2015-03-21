module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    "./styles.css": "./styles.less"
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