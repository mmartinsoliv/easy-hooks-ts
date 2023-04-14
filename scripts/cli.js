const { getInput, getError, generateComponentTemplate } = require('./utils')

module.exports = (plop) => {
  let actions

  plop.setGenerator('Custom hook ⚛️', {
    description: 'Create a custom hook',
    prompts: getInput('What is your custom hook name?'),
    actions: (data) => {
      if (data.name) actions = generateComponentTemplate(data.name, `${data.name}.spec`)
      else getError()

      return actions
    }
  })
}
