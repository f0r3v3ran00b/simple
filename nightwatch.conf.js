module.exports = {
    "src_folders": [
        "tests"
    ],
    "selenium": {
        "start_process": true,
        "server_path": "./bin/selenium-server-standalone-3.0.1.jar",
        "log_path": false,
        "port": 4444,
        "cli_args": {
            "webdriver.chrome.driver": "./bin/chromedriver"
        }
    },
    "test_settings": {
        "default": {
            "launch_url": "http://localhost",
            "selenium_port": 4444,
            "selenium_host": "127.0.0.1",
            "silent": true,
            "desiredCapabilities": {
                "browserName": "chrome",
                "platform": "ANY"
            }
        }
    }
}
