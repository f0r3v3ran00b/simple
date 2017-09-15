module.exports = {
    disabled : false,
    'Should search for and find nightwatch.js in Google' : function (browser) {
        browser
            .url('http://www.google.com')
            .waitForElementVisible('body', 1000)
            .setValue('input[aria-label="Search"]', 'nightwatch.js')
            .click('input[aria-label="Google Search"]')
            .pause(1000)
            .assert.containsText('body', 'nightwatch.js')
            .end();
    }
};