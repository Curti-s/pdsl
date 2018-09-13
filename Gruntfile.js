const grunt = require('grunt');
//load grunt
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // tasks
        sass: {
            dist: {
                options: {
                    sourcemap: 'none'
                },
                files: {
                    'pdsl/css/style.css':'pdsl/scss/style.scss'
                }
            }
        },
        postcss: { // add vendor profixes and minify css
            options: {
                map: false,
                processors: [
                    require('autoprefixer')({
                        browsers: ['last 2 versions']
                    })
                ]
            },
            dist: {
                src: 'css/style.css'
            }
        },
        watch: {
            css: {
                files: 'scss/.style.scss',
                tasks: ['sass','postcss']
            }
        },
        browserSync: {
            bsFiles: {
                src: ['*.html', 'css/*.css']
            },
            options: {
                watchTask: true,
                server: {
                    baseDir: './'
                }
            }
        },
    });

    // load grunt plugins
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');


    // registerTask
    grunt.registerTask('default', ['browserSync','watch']);
};
