# next-level-console
This is repository for custom console in javascript

How to install
```
$ npm i next-level-console
```

Example
```javascript
const cl = require('next-level-console')
cl.custom(info, color)
// info = your console information
// *color = array of coloring console information

cl.dateOn(value)
// *value = true => date on
// *value = true => date off

// * optional parameter

const cl = require('next-level-console')
cl.custom('app', ['green'])
cl.dateOn(true)

console.debug('testing')
/*
    e.g output
    [DEBUG][APP][Sun Sep 22 2019 20:30:59 GMT+0700 (WIB)]:  testing
    // [DEBUG] will have green color
    // [APP] will have default color
    // [Sun Sep 22 2019 20:30:59 GMT+0700 (WIB)]: will have default color
*/

const cl = require('next-level-console')
cl.custom('app', ['green'])
cl.dateOn(false)

console.log('testing')
/*
    e.g output
    [LOG][APP]:  testing
    // [LOG] will have green color
    // [APP] will have default color
*/

const cl = require('next-level-console')
cl.custom('controller', ['green', 'blue', 'yellow', 'grey'])
cl.dateOn(true)

console.error('testing')
/*
    e.g output
    [ERROR][CONTROLLER][Sun Sep 22 2019 20:30:59 GMT+0700 (WIB)]:  testing
    // [ERROR] will have green color
    // [CONTROLLER] will have blue color
    // [Sun Sep 22 2019 20:30:59 GMT+0700 (WIB)]: will have yellow color
    // testing will have grey color
*/
```