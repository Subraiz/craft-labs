const app = require("./app");
const chalk = require("chalk");
const port = process.env.PORT;

app.listen(port, function() {
  const test = String();
  console.log(
    "Express server listening on port %s in %s Mode.",
    chalk.bold.italic.magenta(port),
    chalk.bold.underline.red(process.env.ENV.toUpperCase())
  );
});
