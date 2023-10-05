// We can use winston
const winston = require('winston');


const learningLogger = () => {
    return winston.createLogger({
        level: 'info',         //it will only print anything before info log 
        format: winston.format.json(),     //format of the log file
        defaultMeta: { service: 'user-service' },
        transports: [
          //
          // - Write all logs with importance level of `error` or less to `error.log`
          // - Write all logs with importance level of `info` or less to `combined.log`
          //
          new winston.transports.File({ filename: 'error.log', level: 'error' }),
          new winston.transports.File({ filename: 'combined.log' }),
        ],
      });
};

module.exports = learningLogger;
