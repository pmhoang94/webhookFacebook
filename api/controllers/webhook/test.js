module.exports = {
  friendlyName: 'Test',

  description: 'Test webhook.',

  inputs: {},

  exits: {},

  fn: async function(inputs, exits) {
    return exits.success('ok')
  }
}
