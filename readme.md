# marvel [![Build Status](https://travis-ci.org/yoanmarchal/marvel-cli.svg?branch=master)](https://travis-ci.org/yoanmarchal/marvel-cli)

> Get marvel names

The list is just a [JSON file](marvel.json) and can be used wherever.


## Install

```
$ npm install --save marvel
```


## Usage

```js
var marvel = require('marvel');

marvel.random();
//=> 'Captain America'
```


## API

### .all

Type: `array`

Marvel names in alphabetical order.

### .random()

Type: `function`

Random marvel name.


## CLI

```
$ npm install --global marvel
```

```
$ marvel --help

  Examples
    $ marvel
    Captain America

    $ marvel --all
    Namor
    The Call
    War
    M
    ...

  Options
    --all   Get all names instead of a random name
```
