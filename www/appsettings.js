
var argscheck = require('cordova/argscheck'),
  exec = require('cordova/exec');

function AppSettings () {

}
/**
 * Get a config.xml settings (preference) value
 *
 * @param {String} keyArray Key
 * @param {Function} successCallback The function to call when the value is available
 * @param {Function} errorCallback The function to call when value is unavailable
 */
AppSettings.prototype.get5 = function (keyArray, successCallback, errorCallback) {
    try {
        argscheck.checkArgs('AFF', 'AppSettings.get5', arguments);
    } catch (exception) {
        argscheck.checkArgs('AF', 'AppSettings.get5', arguments);
    }

    exec(successCallback, errorCallback, "AppSettings", "get5", keyArray);
};

module.exports = new AppSettings();
