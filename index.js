const chalk = require('chalk')

let time

function dateOn(value) {
  return time = value ? new Date().toString() : ''
}

function custom(...args) {
  const prefix = args[0]
  const color = args[1] ? args[1] : []
  const consoleTypes = {
    log: console.log,
    error: console.error,
    warn: console.warn,
    info: console.info,
    debug: console.debug
  }

  function customPrefix(key, args) {
    let content
    if (!time) {
      content = [key.toUpperCase(), prefix.toUpperCase(), args]
    } else {
      content = [key.toUpperCase(), prefix.toUpperCase(), time, args]
    }

    const arrInfo = []
    content.forEach((v, i) => {
      let value = `[${v}]`
      if (i === content.length - 2) {
        value = `[${v}]: `
      } else if (i === content.length - 1){
        value = `${v}`
      }
      arrInfo.push(chalk[color[i] ? color[i] : 'white'](value))
    })
    return arrInfo.join('')
  }

  Object.keys(consoleTypes).forEach(key => {
    console[key] = (...args) => {
      const result = customPrefix(key, args)
      consoleTypes[key](result)
    }
  })
}

module.exports = {
  custom,
  dateOn,
}