module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.initConfig({
        watch: {
            dev: {
                options: {
                    livereload: true // livereaload option added!
                },
                files: 'src/index.html'
            }
        },
        connect: {
            dev: {
                options: {
                    open: true,
                    port: 8083,
                    base: 'src',
                    keepalive: true,
                    hostname: 'localhost',
                    livereload: true
                }
            }
        },
        concurrent: {
            dev: ['connect:dev', 'watch:dev'] // connect and watch running concurrently!
        }

    });


    grunt.registerTask('serve', function(target) {
        grunt.task.run(['concurrent']);
    });

};
