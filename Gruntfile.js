// module.exports = function(grunt) {

//     grunt.loadNpmTasks('grunt-contrib-watch');
//     grunt.loadNpmTasks('grunt-concurrent');
//     grunt.loadNpmTasks('grunt-contrib-connect');

//     grunt.initConfig({
//         watch: {
//             dev: {
//                 options: {
//                     livereload: true // livereaload option added!
//                 },
//                 files: 'src/index.html'
//             }
//         },
//         connect: {
//             dev: {
//                 options: {
//                     open: true,
//                     port: 8083,
//                     base: ['src', 'bower_components'],
//                     keepalive: true,
//                     hostname: 'localhost',
//                     livereload: true
//                 }
//             }
//         },
//         concurrent: {
//             dev: ['connect:dev', 'watch:dev'] // connect and watch running concurrently!
//         }

//     });


//     grunt.registerTask('serve', function(target) {
//         grunt.task.run(['concurrent']);
//     });

// };
module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-karma');

    var staticConnect = require("serve-static")

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
        }
    });


    grunt.registerTask('serve', function(target) {
        grunt.task.run(['concurrent']);
    });

    grunt.registerTask('test', [
        'karma:unit'
    ]);

};
