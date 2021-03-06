// Karma configuration
// Generated on Tue Sep 12 2017 10:38:45 GMT+0200 (Central European Daylight Time)

// importing webpack config, which will be used to build tests
var webpackConfig = require('./webpack.config.js');

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            'src/**/*.js',
            'test/**/*.js',
            'test/**/*Spec.js'
        ],

        // list of files to exclude
        exclude: [],

        // using the webpack config file
        webpack: webpackConfig,

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'src/**/*.js': ['webpack'],
            'test/**/*.js': ['webpack'],
            'test/**/*Spec.js': ['webpack']
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        // reporters: ['progress', 'spec', 'dots', 'tap'],
        reporters: ['spec'],

        // configuring [spec] reporter
        specReporter: {
            maxLogLines: 5, // limit number of lines logged per test 
            suppressErrorSummary: true, // do not print error summary 
            suppressFailed: false, // do not print information about failed tests 
            suppressPassed: false, // do not print information about passed tests 
            suppressSkipped: true, // do not print information about skipped tests 
            showSpecTiming: false // print the time elapsed for each spec 
        },

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_DEBUG,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    })
}