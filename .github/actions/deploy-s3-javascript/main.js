const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

function run() {
  core.cotice('Hello from my custom Javascript action!');
}

run();