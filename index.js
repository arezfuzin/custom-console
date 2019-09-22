const chalk = require('chalk')


function customConsole(...args) {
  const consoleTypes = {
    log: console.log,
    error: console.error,
    warn: console.warn,
    info: console.info,
    debug: console.debug
  }

  function customPrefix(key) {
    const time = chalk[args[2]](`[${new Date().toString()}]`)
    const prefixMsg = chalk[args[3]](`[${args[0]}]`)
    const keyType = chalk[args[1]](`[${key.toUpperCase()}]`)
    return `${keyType}${prefixMsg}${time}: `
  }

  Object.keys(consoleTypes).forEach(key => {
    console[key] = (...args) => {
      args.unshift(customPrefix(key))
      consoleTypes[key](...args)
    }
  })
}

module.exports = customConsole