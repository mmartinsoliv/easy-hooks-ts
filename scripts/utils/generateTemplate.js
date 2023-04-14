const composePrompts = require('./composePrompts')

const generateComponentTemplate = (fileIndex, fileTest) => {
  return [
    {
      type: 'add',
      path: composePrompts(fileIndex),
      templateFile: 'templates/components/Component.js.hbs'
    },
    {
      type: 'add',
      path: composePrompts(fileTest),
      templateFile: 'templates/components/test.js.hbs'
    },
    {
      type: 'append',
      path: '../src/index.ts',
      templateFile: 'templates/components/index.js.hbs'
    }
  ]
}

module.exports = { generateComponentTemplate }
