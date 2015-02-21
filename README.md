### yaml-validate

`npm i yaml-validate`

[![Build Status](https://travis-ci.org/samccone/yaml-validate.svg)](https://travis-ci.org/samccone/yaml-validate)

### Using

```js
yamlValidate = require('yaml-validate');

// takes a glob as a file matcher
yamlValidate('**/*.yaml')
.then(function(yamls) {
// all is well
})
.catch(function(err) {
// something is invalid
});
```

### Why?

Sometimes as part of a linting process for a code base you want to ensure that everything is valid yaml. This tool aims to make it easy to integrate a yaml validation layer to your CI flow.
