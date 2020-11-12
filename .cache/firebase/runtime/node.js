(function() {
  const [script, ...otherArgs] = process.argv.slice(2);
  require("child_process")
    .fork(script, otherArgs, {
      env: process.env,
      cwd: process.cwd(),
      stdio: "inherit"
    })
    .on("exit", code => {
      process.exit(code);
    });
})()