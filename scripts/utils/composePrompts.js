const getDynamicPath = require('./getDynamicPath')

const composePrompts = (file) => {
  const dynamicPath = getDynamicPath(file)

  return dynamicPath
}

module.exports = composePrompts
