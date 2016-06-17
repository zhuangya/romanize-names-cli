#!/usr/bin/env node
'use strict';

const meow = require('meow');
const romanize = require('romanize-names');

const cli = meow(`
  Usage

  $ romanize <input>

  Options

    -s, --system Select different romanize system [WG(default), MPS-II, TONGYONG, HANYU]

  Example

    $ romanize 庄亚

    Ya Chuang

    $ romanize 庄亚 -s HANYU

    Ya Zhuang
`, {
  alias: {
    s: 'system'
  }
});

if (!cli.input[0]) {
  cli.showHelp();
}

console.log(romanize(cli.input[0], cli.flags.s));
