const getInput = (message) => {
  return [
    {
      type: 'input',
      name: 'name',
      message
    }
  ]
}

module.exports = getInput
