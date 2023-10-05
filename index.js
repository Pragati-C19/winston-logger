const { Logger } = require("winston");

console.log("Log Information");
console.warn("Warn Log Information");
console.info("Info Log Information");
console.debug("Debug Log Information");

/*
    npm logging has 7 leveles
    0: error
    1: warn
    2: info
    3: http
    4: verbose
    5: debug
    6: silly

    If your level is set to info that means 2, then all of the above logs are allowed to be printed but anything below that so http log cannot be printed
    Logs should be printed in a format of JSON
    You can install ENV file for that follow the winston document 
    If you don't want to install Environmental (ENV) files then check start key in package.json
*/

const logger = require("./logger")

logger.warn("Warn Log Information");
logger.info("Info Log Information");
logger.debug("Debug Log Information");

