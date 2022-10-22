const сracoAlias = require("craco-alias");

module.exports = {
   plugins: [
      {
         plugin: сracoAlias,
         options: {
            source: "tsconfig",
            baseUrl: "./src",
            tsConfigPath: "./tsconfig.paths.json",
         },
      },
   ],
};
