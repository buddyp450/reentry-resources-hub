const spawn = require('child_process').spawn;
const watch = require('node-watch');
const path = require('path');
const chalk = require('chalk');

// Returns child process running concurrent npm tasks
function start() {
  console.log(chalk.grey('Concurrently starting server & client..'));
  return spawn('node', [
    path.join(__dirname, '../node_modules/concurrently/src/main.js'),
    '"npm run server"',
    '"npm run client"',
  ], {
    stdio: ['inherit', 'inherit', 'inherit'],
  });
}

let child = start();
// Stay alive!
child.on('exit', (code) => {
  console.log(chalk.grey('exit:', code));
});
child.on('close', (code, signal) => {
  console.log(chalk.yellow('Closed with ', code, 'code and signal', signal));
  child = start();
});
child.on('disconnect', () => {
  console.log(chalk.yellow('Disconnected from child process'));
})
child.on('error', (err) => {
  console.log(chalk.red(err));
});
// Watches both our server file and this file for changes and
// retsarts our server & client for any changes detected
watch(path.join(__dirname, '../server.js'), () => {
  console.log('Child exists?', (child !== null && child !== undefined));
  console.log(chalk.yellow('Modified server setup! Restarting...'));
  process.kill(child.pid);
});
