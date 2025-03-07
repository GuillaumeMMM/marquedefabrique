const fs = require("fs");
const pjson = require("./package.json");

const comment = `// Generated on ${new Date().toDateString()} from v${
  pjson.version
}\n\n`;

const kit = fs.readFileSync("./kit.css", "utf8");
const variables = fs.readFileSync("./variables.css", "utf8");
const reset = fs.readFileSync("./reset.css", "utf8");

fs.writeFileSync("build/kit.js", `${comment}export const kit = \`${kit}\`;`);
fs.writeFileSync(
  "build/variables.js",
  `${comment}export const variables = \`${variables}\`;`
);
fs.writeFileSync(
  "build/reset.js",
  `${comment}export const reset = \`${reset}\`;`
);
