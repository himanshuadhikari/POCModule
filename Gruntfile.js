module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    var staticConnect = require("serve-static")

    grunt.initConfig({
        watch: {
            dev: {
                options: {
                    livereload: true // livereaload option added!
                },
                files: ['src/index.html', 'src/scripts/**/*.js']
            }
        },
        connect: {
            options: {
                port: 9000,
                // Change this to '0.0.0.0' to access the server from outside.
                hostname: 'localhost',
                livereload: 35729,
                keepalive: true
            },
            livereload: {
                options: {
                    open: true,
                    middleware: function(connect, options) {
                        return [
                            function(req, res, next) {
                                next();
                            },
                            staticConnect('.tmp'),
                            connect().use(
                                '/bower_components',
                                staticConnect('./bower_components')
                            ),
                            staticConnect('src')
                        ];
                    }
                }
            },
            test: {
                options: {
                    port: 9001,
                    middleware: function(connect) {
                        return [
                            staticConnect('.tmp'),
                            staticConnect('test'),
                            connect().use(
                                '/bower_components',
                                staticConnect('./bower_components')
                            ),
                            staticConnect('src')
                        ];
                    }
                }
            }
        },
        concurrent: {
            dev: ['connect:livereload', 'watch:dev'] // connect and watch running concurrently!
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                port: 9999,
                singleRun: true,
                browsers: ['PhantomJS'],
                logLevel: 'ERROR'
            }
        },
        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: ['src/scripts/**/*.js'],
                dest: 'dist/pocmodule.js',
            }
        },
        uglify: {
            options: {
                compress: true
            },
            my_target: {
                files: {
                    'dist/pocmodule.min.js': ['dist/pocmodule.js']
                }
            }
        },
        htmlmin: { // Task
            dist: { // Target
                options: { // Target options
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: { // Dictionary of files
                    'dist/views/directive/testDirectiveTemplate.html': 'src/views/directive/testDirectiveTemplate.html'
                }
            }
        }
    });


    grunt.registerTask('serve', function(target) {
        grunt.task.run(['concurrent']);
    });

    grunt.registerTask('test', [
        'karma:unit'
    ]);

    grunt.registerTask('build', [
        'concat',
        'uglify',
        'htmlmin'
    ]);

};
