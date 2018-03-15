exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    getPageTimeout: 60000,
    allScriptsTimeout: 500000,
    capabilities: {
        'browserName': 'chrome'
    },
    specs: ['*.spec.js'],
    baseURL: 'http://localhost:8080/',
    framework: 'jasmine',
};