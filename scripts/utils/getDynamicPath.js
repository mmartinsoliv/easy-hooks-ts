const getDynamicPath = (file) => {
  return `../src/{{camelCase name}}/${file}.ts`
}

module.exports = getDynamicPath
