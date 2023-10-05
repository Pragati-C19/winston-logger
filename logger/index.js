const learningLogger= require("./learningLogger")

let logger = null;

// sample code from winston document
if (process.env.NODE_ENV !== "production") {
  // logger gets information from learningLogger function
  logger = learningLogger();
}

module.exports = logger;
