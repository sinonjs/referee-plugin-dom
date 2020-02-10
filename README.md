# `referee-plugin-dom`

[![CircleCI](https://circleci.com/gh/sinonjs/referee-plugin-dom.svg?style=svg)](https://circleci.com/gh/sinonjs/referee-plugin-dom)
[![codecov](https://codecov.io/gh/sinonjs/referee-plugin-dom/branch/master/graph/badge.svg)](https://codecov.io/gh/sinonjs/referee-plugin-dom)
<a href="CODE_OF_CONDUCT.md"><img src="https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg" alt="Contributor Covenant" /></a>

This is the early stages of a new plugin for `@sinonjs/referee`

## Usage

In `/demo/` you can see how this is (currently) used

```js
"use strict";
var referee = require("referee");
// initialize the plugin
require("@sinonjs/referee-plugin-dom")(referee);
```
